const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  favourite: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  ],
  cart: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  shippingInfo: {
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    postCode: {
      type: Number,
    },
    phoneNo: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Activity", activitySchema);
