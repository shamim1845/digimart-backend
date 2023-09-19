const mongoose = require("mongoose");
const slugify = require("../helpers/slugify");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter a Brand name."],
    minLength: [2, "Brand name  should have more than 2 characters."],
    maxLength: [30, "Brand name can't exceed 30 charecters."],
  },
  slug: {
    type: String,
    index: true,
  },
});

brandSchema.pre("save", async function (next) {
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model("Brand", brandSchema);
