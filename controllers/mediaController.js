const catchAsyncError = require("../middleware/catchAsyncError");
const cloudinary = require("cloudinary").v2;

// Upload  Images
exports.uploadImages = catchAsyncError(async (req, res, next) => {
  const { images, folder } = req.body;

  if (images.length === 0) {
    return res.status(400).json({
      success: false,
      message: "base64 image list is required.",
    });
  }

  const uploads = images.map(({ base64, options }) => {
    return cloudinary.uploader.upload(base64, {
      folder: `digimart/${folder}`,
      ...options,
    });
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
        message: err?.message,
      });
    });
});

// Delete  Images
exports.deleteImages = catchAsyncError(async (req, res, next) => {
  const { public_ids } = req.body;

  if (public_ids.length === 0) {
    return res.status(400).json({
      success: false,
      message: "public_ids is required.",
    });
  }

  const response = await cloudinary.api.delete_resources(public_ids, {
    resource_type: "image",
    invalidate: true,
  });

  res.status(200).send({
    success: true,
    response,
  });
});
