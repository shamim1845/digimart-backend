const express = require("express");
const {
  createBrand,
  getAllBrands,
  deleteBrand,
  editBrand,
} = require("../controllers/brandController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.get("/brands", getAllBrands);

// for admin
router.post(
  "/admin/brand",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createBrand
);
router.put(
  "/admin/brand/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  editBrand
);
router.delete(
  "/admin/brand/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteBrand
);

module.exports = router;
