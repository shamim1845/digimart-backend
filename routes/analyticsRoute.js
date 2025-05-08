const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { getAnalytics } = require("../controllers/analyticsController");


const router = express.Router();

// => For Admin
router.get(
    "/admin/analytics",
    isAuthenticatedUser,
    authorizeRoles("admin"),
    getAnalytics
);



module.exports = router;
