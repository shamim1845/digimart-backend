const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter product Name"],
    },
    description: {
      type: String,
      required: [true, "Please Enter product Description"],
    },
    price: {
      type: Number,
      required: [true, "Please Enter product Price"],
      maxlength: [8, "Price Can't exceed 8 charecters "],
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "please Enter Product Category"],
    },
    brand: {
      type: String,
      default: "No Brand",
    },
    stock: {
      type: Number,
      required: [true, "Please Enter product Stock"],
      maxlength: [4, "Stock can not exceed 4 charecter"],
      default: 1,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        userId: {
          type: mongoose.Schema.ObjectId,
          ref: "USER",
        },
        name: {
          type: String,
        },
        rating: {
          type: Number,
        },
        comment: {
          type: String,
        },
        images: [
          {
            public_id: {
              type: String,
              required: true,
            },
            url: {
              type: String,
              required: true,
            },
          },
        ],
        reviewedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    ratingDetails: {
      rating1: {
        type: Number,
        default: 0,
      },
      rating2: {
        type: Number,
        default: 0,
      },
      rating3: {
        type: Number,
        default: 0,
      },
      rating4: {
        type: Number,
        default: 0,
      },
      rating5: {
        type: Number,
        default: 0,
      },
    },
    avgRatings: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "USER",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
