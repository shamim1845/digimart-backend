const catchAsyncError = require("../middleware/catchAsyncError");
const Category = require("../models/categoryModel");
const slugify = require("../helpers/slugify");
const buildAncestors = require("../helpers/buildAncestors");

// Create a new category
exports.createCategory = catchAsyncError(async (req, res) => {
  const { name, parent } = req.body;

  const PrevCategory = await Category.findOne({ slug: slugify(name) });
  if (PrevCategory) {
    console.log(PrevCategory);

    return res.status(400).send({
      success: false,
      message: "Category already exist.",
    });
  }

  const category = await Category.create({
    name: name,
    parent: parent ? parent : null,
  });

  buildAncestors(category._id, parent);

  res.status(201).send({
    success: true,
    message: "Category successfully created.",
    category: category,
  });
});

// Get All category
exports.getAllCategory = catchAsyncError(async (req, res) => {
  // Find parent categories
  const parent_categories = await Category.find({ parent: null })
    .select({
      name: true,
      slug: true,
    })
    .exec();

  // Find child categories with parent id
  const catPromise = new Promise(async (resolve, reject) => {
    const findChildren = async (parent_categories) => {
      const childrens = parent_categories.map(async (parent) => {
        return Category.find({ parent: parent._id })
          .select({ name: true, slug: true })
          .exec()
          .then(async (children) => {
            const parent_copy = JSON.parse(JSON.stringify(parent));
            const grand_child = await findChildren(children);

            return {
              ...parent_copy,
              children: grand_child.length > 0 ? grand_child : null,
            };
          });
      });

      return await Promise.all(childrens);
    };

    try {
      const descendants = await findChildren(parent_categories);

      Promise.all(descendants).then((data) => {
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });

  const cat_decendents = await catPromise;

  res.status(200).send({
    success: true,
    message: "Category successfully found.",
    category: cat_decendents,
  });
});

// Get All descendants category
exports.getAllDescendantsCategory = catchAsyncError(async (req, res) => {
  const { category_id } = req.query;

  const result = await Category.find({ "ancestors._id": category_id })
    .select({ _id: false, name: true, slug: true })
    .exec();

  res.status(200).send({
    success: true,
    message: "Category successfully found.",
    category: result,
  });
});
