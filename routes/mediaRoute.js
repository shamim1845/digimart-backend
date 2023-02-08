const { uploadImage } = require("../controllers/mediaController");

const express = require("express");
const router = express.Router();

router.post("/uploadimage", uploadImage);

module.exports = router;
