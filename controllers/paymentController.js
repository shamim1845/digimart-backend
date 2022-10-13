const catchAsyncErrors = require("../middleware/catchAsyncError");

const stripe = require("stripe")("sk_test_51KWHPxKtPRz3pfcCqrPBIVNaBLG2zOHIOtixKcGmgz0ImWGIgzKBbHSdJr7Ao2AuPekjTURJ78opqlVngrLjwucd00fkDK2AcV");

exports.processPayment = catchAsyncErrors(async (req, res) => {
    const myPayment = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
          },
    });

    res.status(200).json({
        payment: "sucess", client_secret: myPayment.client_secret
    })
})

exports.sendStripeApiKey = catchAsyncErrors(async (req, res) => {
    res.status(200).json({stripeApiKey: process.env.STRIPE_API_KEY})
})