const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  newArivals,
  newArivalsCategories,
  deleteReview,
  getProductReview,
} = require("../controllers/productController");

const router = express.Router();

// => For Admin
router.post(
  "/admin/product/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createProduct
);
router.put(
  "/admin/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateProduct
);
router.delete(
  "/admin/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);

// For All User
router.get("/products", getAllProduct);
router.get("/product/:id", getProductDetails);
router.get("/products/new-arrivals", newArivals);
router.get("/products/new-arrivals-categories", newArivalsCategories);

// For Authenticated User
router.get("/product-review/:productId", isAuthenticatedUser, getProductReview);
router.put(
  "/product-review/:productId",
  isAuthenticatedUser,
  createProductReview
);
router.delete("/product-review/:productId", isAuthenticatedUser, deleteReview);

module.exports = router;
