const catchAsyncErrors = require("../middleware/catchAsyncError");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// Stripe payment intent
exports.processPayment = catchAsyncErrors(async (req, res) => {
  const myPayment = await stripe.paymentIntents.create({
    currency: "usd",
    amount: req.body.amount,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.status(200).json({
    payment: "sucess",
    client_secret: myPayment.client_secret,
  });
});

// Send Stripe API key
exports.sendStripeApiKey = catchAsyncErrors(async (req, res) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});

// Stripe WebHooks
let session;
exports.stripeWebhooks = catchAsyncErrors();
