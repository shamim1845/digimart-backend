const express = require("express");

const { isAuthenticatedUser } = require("../middleware/auth");
const {
  addFavouriteItem,
  deleteFavouriteItem,
  emptyFavouriteItem,
  addCartItem,
  deleteCartItem,
  emptyCartItem,
  getFavouriteItem,
  getCartItem,
  addShippingInfo,
  getShippingInfo,
} = require("../controllers/activityController");

const router = express.Router();

// for authenticated user
router.get("/favourite", isAuthenticatedUser, getFavouriteItem);
router.post("/favourite/add", isAuthenticatedUser, addFavouriteItem);
router.delete("/favourite/remove", isAuthenticatedUser, deleteFavouriteItem);
router.delete("/favourite/remove/all", isAuthenticatedUser, emptyFavouriteItem);

router.get("/cart", isAuthenticatedUser, getCartItem);
router.post("/cart/add", isAuthenticatedUser, addCartItem);
router.delete("/cart/remove", isAuthenticatedUser, deleteCartItem);
router.delete("/cart/remove/all", isAuthenticatedUser, emptyCartItem);

router.get("/shippinginfo", isAuthenticatedUser, getShippingInfo);
router.post("/shippinginfo/add", isAuthenticatedUser, addShippingInfo);

module.exports = router;
