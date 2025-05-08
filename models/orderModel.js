const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    shippingInfo: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      postCode: {
        type: Number,
        required: true,
      },
      phoneNo: {
        type: Number,
        required: true,
      },
    },
    orderItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
      },
    ],
    orderedUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "USER",
      required: true,
    },
    paymentInfo: {
      id: {
        type: String,
        required: true,
      },
      provider: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      paidAt: {
        type: Date,
        required: true,
        default: Date.now,
      },
      itemsPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      taxPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      shippingPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      totalPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      currency: {
        type: String,
        required: true,
        enum: ["USD", "BDT", "INR"],
      },
    },
    orderStatus: {
      type: String,
      required: true,
      default: "processing",
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
