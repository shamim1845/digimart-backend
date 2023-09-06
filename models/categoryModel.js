const mongoose = require("mongoose");
const slugify = require("../helpers/slugify");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your category name."],
    minLength: [2, "Category name  should have more than 3 characters."],
    maxLength: [30, "Category name can't exceed 30 charecters."],
  },
  slug: {
    type: String,
    index: true,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: "Category",
  },
  ancestors: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        index: true,
      },
      name: {
        type: String,
      },
      slug: {
        type: String,
      },
    },
  ],
});

categorySchema.pre("save", async function (next) {
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model("Category", categorySchema);
