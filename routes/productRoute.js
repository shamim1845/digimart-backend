const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReviews,
  newArivals,
  getAllFilteredProduct,
  getAllCategories,
  newArivalsCategories,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

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
router.get("/products/filter", getAllFilteredProduct);
router.get("/products/category", getAllCategories);
router.get("/products/new-arrivals", newArivals);
router.get("/products/new-arrivals-categories", newArivalsCategories);
router.get("/product/:id", getProductDetails);
router.get("/singlereview", getProductReviews);

// For Authenticated User
router.put("/product/review", isAuthenticatedUser, createProductReview);
router.delete("/singlereview", isAuthenticatedUser, deleteReviews);

module.exports = router;
