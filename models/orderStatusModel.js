const mongoose = require("mongoose");
const slugify = require("../helpers/slugify");

const orderStatusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
});

// [
//   "pending",
//   "processing",
//   "shipping",
//   "holded",
//   "delivered",
//   "canceled",
//   "closed",
// ];

orderStatusSchema.pre("save", function (next) {
  this.status = slugify(this.name);
  next();
});

module.exports = mongoose.model("orderStatus", orderStatusSchema);
