const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const {
  getAllOrderStatus,
  createOrderStatus,
  updateOrderStatus,
  deleteOrderStatus,
} = require("../controllers/orderStatusController");

router.get(
  "/admin/order-status",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllOrderStatus
);

router.post(
  "/admin/order-status/create",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createOrderStatus
);

router.put(
  "/admin/order-status/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateOrderStatus
);

router.delete(
  "/admin/order-status/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteOrderStatus
);

module.exports = router;
