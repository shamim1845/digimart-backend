const {
  uploadImages,
  deleteImages,
} = require("../controllers/mediaController");

const express = require("express");
const router = express.Router();

router.post("/media/uploadimages", uploadImages);
router.delete("/media/deleteImages", deleteImages);

module.exports = router;
