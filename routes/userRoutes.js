const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
  loginStatus,
  createUser,
} = require("../controllers/userController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// For Normal user
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/loggedin", loginStatus);
router.put("/password/update", isAuthenticatedUser, updatePassword);
router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword);
router.get("/logout", logout);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.put("/profile/update", isAuthenticatedUser, updateProfile);

// For admin user
router.post(
  "/admin/createUser",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createUser
);
router.get(
  "/admin/users",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllUser
);
router.get(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getSingleUser
);
router.put(
  "/admin/user/role/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateUserRole
);
router.delete(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteUser
);

module.exports = router;
