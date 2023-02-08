const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please Enter product Name"],
    },
    description: {
      type: String,
      require: [true, "Please Enter product Description"],
    },
    price: {
      type: Number,
      require: [true, "Please Enter product Price"],
      maxlength: [8, "Price Can't exceed 8 charecters "],
    },
    images: [
      {
        public_id: {
          type: String,
          require: true,
        },
        url: {
          type: String,
          require: true,
        },
      },
    ],
    category: {
      type: String,
      require: [true, "please Enter Product Category"],
    },
    brand: {
      type: String,
      default: "No Brand",
    },
    stock: {
      type: Number,
      require: [true, "Please Enter product Stock"],
      maxlength: [4, "Stock can not exceed 4 charecter"],
      default: 1,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
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
            url: {
              type: String,
            },
          },
        ],
        reviewedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "USER",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
