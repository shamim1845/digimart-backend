const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const {
  processPayment,
  sendStripeApiKey,
  stripeWebhooks,
} = require("../controllers/paymentController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.post("/create-payment-intent", isAuthenticatedUser, processPayment);

router.get("/stripeappikey", isAuthenticatedUser, sendStripeApiKey);

//********  web hooks *********/
router.post(
  "/webhook",
  express.json({ type: "application/json" }),
  (request, response) => {
    const event = request.body;

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const paymentIntent = event.data.object;
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        function createOrder() {
          console.log("Order Created");
        }
        createOrder();
        break;
      case "checkout.session.async_payment_failed":
        const paymentMethod = event.data.object;
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event
    response.json({ received: true });
  }
);

module.exports = router;
