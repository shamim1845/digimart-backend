const express = require("express");
const { processPayment, sendStripeApiKey } = require("../controllers/paymentController");
const router = express.Router();
const {isAuthenticatedUser} = require("../middleware/auth");

router.post("/create-payment-intent", isAuthenticatedUser, processPayment);

router.get("/stripeappikey", isAuthenticatedUser, sendStripeApiKey)

module.exports = router;