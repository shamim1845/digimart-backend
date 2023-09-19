const Category = require("../models/categoryModel");
const buildAncestors = require("./buildAncestors");

const updateImidiateChildren = async (id, parent) => {
  const category = await Category.findById(id);
  if (!parent) {
    category.parent = null;
    category.ancestors = [];
    await category.save();
  } else {
    category.parent = parent;
    category.ancestors = await buildAncestors(parent);
    await category.save();
  }

  const childrens = await Category.find({ parent: id });
  if (childrens) {
    childrens.map((category) => {
      updateImidiateChildren(category._id, id);
    });
  }
};

module.exports = updateImidiateChildren;
