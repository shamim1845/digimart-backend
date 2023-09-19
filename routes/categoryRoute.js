const express = require("express");
const {
  createCategory,
  getAllCategory,
  getAllDescendantsCategory,
  getAdminCategories,
  editCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// for admin
router.post(
  "/admin/categories",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createCategory
);
router.put(
  "/admin/categories/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  editCategory
);
router.delete(
  "/admin/categories/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteCategory
);
router.get(
  "/admin/categories",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAdminCategories
);

// for user
router.get("/categories", getAllCategory);
router.get("/categories/descendants", getAllDescendantsCategory);

module.exports = router;
