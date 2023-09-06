const Category = require("../models/categoryModel");

const buildAncestors = async (id, parent_id) => {
  let ancest = [];
  try {
    let parent_category = await Category.findOne(
      { _id: parent_id },
      { name: 1, slug: 1, ancestors: 1 }
    ).exec();

    if (parent_category) {
      const { _id, name, slug, ancestors } = parent_category;

      ancest = [...ancestors];
      ancest.unshift({ _id, name, slug });

      const category = await Category.findByIdAndUpdate(id, {
        $set: { ancestors: ancest },
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = buildAncestors;
