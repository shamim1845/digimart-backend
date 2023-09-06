const { uploadImage } = require("../controllers/mediaController");

const express = require("express");
const router = express.Router();

router.post("/media/uploadimage", uploadImage);

module.exports = router;
