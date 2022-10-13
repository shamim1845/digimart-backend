const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const crypto = require("crypto")

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name can't exceed 30 charecters"],
        minLength: [4, "Name should have more than 4 characters"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 charecter"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: "user"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

})

// password hash
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) {
        next()
    }
        this.password = await bcrypt.hash(this.password, 10);

        return this.password;
     
})

// Token Generate
userSchema.methods.getJWTToken = function () {
    return JWT.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    }) 
}

// compare password
userSchema.methods.comparePassword = async function (enterPassword) {
   return await bcrypt.compare(enterPassword, this.password)
}

// Generating  reset password token
userSchema.methods.getResetPasswordToken = function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString("hex");
    // Hashing and adding resetPasswordToken to userSchema
   this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest('hex');
   this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

   return resetToken;
}

module.exports = mongoose.model("USER", userSchema); 