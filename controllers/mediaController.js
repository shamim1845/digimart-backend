const catchAsyncError = require("../middleware/catchAsyncError");

const cloudinary = require("cloudinary").v2;

// Upload  Images
exports.uploadImage = catchAsyncError(async (req, res, next) => {
  const { images } = req.body;
  if (images.length === 0) {
    res.status(400).json({
      success: false,
      message: "base64 image list is required.",
    });
  } else {
    const uploads = images.map(({ base64, options }) => {
      return cloudinary.uploader.upload(
       base64,
        {
          folder: "digimart",
          ...options,
        }
      );
    });

    Promise.all(uploads)
      .then((values) => {
        res.status(201).send({
          success: true,
          urls: values,
        });
      })
      .catch((err) => {
        res.status(500).send({
          success: false,
          urls: err,
        });
      });
  }
});
