const Category = require("../models/categoryModel");

const buildAncestors = (parent_id) => {
  return new Promise((resolve, reject) => {
    const parent_category_promise = Category.findOne(
      { _id: parent_id },
      { name: 1, slug: 1, ancestors: 1 }
    ).exec();

    parent_category_promise
      .then((parent_category) => {
        if (!parent_category) {
          return reject("Parent category not found.");
        }

        // build ancestors
        let ancest = [];
        const { _id, name, slug, ancestors } = parent_category;

        ancest = [...ancestors];
        ancest.unshift({ _id, name, slug });

        resolve(ancest);
      })
      .catch((err) => {
        console.log(err);
        reject(err.message);
      });
  });
};

module.exports = buildAncestors;
