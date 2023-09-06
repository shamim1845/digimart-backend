const express = require("express");
const {
  createCategory,
  getAllCategory,
  getAllDescendantsCategory,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/admin/categories", createCategory);
router.get("/categories", getAllCategory);
router.get("/categories/descendants", getAllDescendantsCategory);

module.exports = router;
