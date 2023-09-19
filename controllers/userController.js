const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// Register a User
exports.registerUser = catchAsyncError(async (req, res) => {
  const { name, email, password } = req.body;

  const findUser = await User.findOne({ email });

  if (findUser) {
    res.status(400).json({ message: "User allready exists", success: false });
  } else {
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "digimart/utils/a9wgtljtqefqwsg5u3be",
        url: "https://res.cloudinary.com/dewq5eyuf/image/upload/v1694245602/digimart/utils/a9wgtljtqefqwsg5u3be.avif",
      },
    });

    sendToken(user, 201, res);
  }
});

// Login User
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email and Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("User not found", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    res.status(401).json({ message: "Invalid login password" });
    // return next(new ErrorHandler("Invalid  password", 401));
  }
  sendToken(user, 200, res);
});

// log out user
exports.logout = catchAsyncError(async (req, res, next) => {
  res.clearCookie("token");

  res.status(200).json({
    success: true,
    message: "Logged Out Successfull",
  });
});

// forget password
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler("User not Found", 404));
  }
  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  //   const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;
  const resetPasswordUrl = `${process.env.FRONT_END_URL}/password/reset/${resetToken}`;
  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not request this Email then, Please ignore it`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Ecommerce Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(err.message, 500));
  }
});

// reset password
exports.resetPassword = catchAsyncError(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler("Reset Password Token is invalid or has expired", 400)
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(
      new ErrorHandler("Password And Confirm Password did not match", 400)
    );
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  sendToken(user, 200, res);
});

// Get User Details
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

//Update User Password
exports.updatePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  if (!oldPassword || !newPassword || !confirmPassword) {
    return next(
      new ErrorHandler(
        "oldPassword, newPassword and confirmPasswor does not be empty."
      )
    );
  }

  const user = await User.findById(req.user._id).select("+password");

  const verifyUser = await user.comparePassword(oldPassword);
  if (!verifyUser) {
    return next(new ErrorHandler("Old Password is incorrect.", 400));
  }

  if (newPassword !== confirmPassword) {
    return next(
      new ErrorHandler("password and confirm Password doesn't match.", 400)
    );
  }
  user.password = newPassword;
  await user.save();

  sendToken(user, 200, res);
});

// update User Profile
exports.updateProfile = catchAsyncError(async (req, res) => {
  console.log(req.body);
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    birthday: req.body.birthday,
    gender: req.body.gender,
    avatar: {
      public_id: req.body.avatar.public_id,
      url: req.body.avatar.url,
    },
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  await user.save();

  res.status(200).json({
    success: true,
    user,
  });
});

//Get all User (for admin)
exports.getAllUser = catchAsyncError(async (req, res, next) => {
  const user = await User.find();

  res.status(200).json({
    success: true,
    user,
  });
});

// Get Single User (for admin)
exports.getSingleUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User does not exit with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// update User Role (for admin)
exports.updateUserRole = catchAsyncError(async (req, res, next) => {
  const newUserData = {
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  await user.save();

  res.status(200).json({
    success: true,
    user,
  });
});

// Delete User(for admin)
exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User does not exit with Id: ${req.params.id}`)
    );
  }

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User deleted Successfully",
  });
});

// Get Login status
exports.loginStatus = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({
      status: false,
    });
  }
  // Verify Token
  const verified = jwt.verify(token, process.env.JWT_SECRET);

  if (verified) {
    return res.json({
      status: true,
    });
  }
  return res.json({
    status: false,
  });
};
