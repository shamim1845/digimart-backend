const catchAsyncError = require("../middleware/catchAsyncError");
const Category = require("../models/categoryModel");
const slugify = require("../helpers/slugify");
const buildAncestors = require("../helpers/buildAncestors");
const ErrorHandler = require("../utils/errorHandler");
const updateImidiateChildren = require("../helpers/updateImidiateChildren");

// => Create a new category (Admin)
exports.createCategory = catchAsyncError(async (req, res, next) => {
  const { name, parent } = req.body;

  // Find category already exist or not
  const PrevCategory = await Category.findOne({ slug: slugify(name) });
  if (PrevCategory) {
    return res.status(400).send({
      success: false,
      message: "Category already exist.",
    });
  }

  let ancestors = [];
  if (parent) {
    try {
      ancestors = await buildAncestors(parent);
    } catch (error) {
      return next(new ErrorHandler(error, 404));
    }
  }

  const category = await Category.create({
    name: name,
    parent: parent ? parent : null,
    ancestors,
  });

  res.status(201).send({
    success: true,
    message: "Category successfully created.",
    category: category,
  });
});

// => Edit category (Admin)
exports.editCategory = catchAsyncError(async (req, res, next) => {
  const { name, parent } = req.body;
  const { id } = req.params;

  // find category
  let category = await Category.findById(id);

  if (!category) {
    return next(new ErrorHandler("Category not found.", 404));
  }

  // build ancestors
  let ancestors = [];
  if (parent) {
    try {
      ancestors = await buildAncestors(parent);
    } catch (error) {
      return next(new ErrorHandler(error, 404));
    }
  }

  category.name = name;
  category.parent = parent ? parent : null;
  category.ancestors = ancestors;

  category = await category.save({
    validateModifiedOnly: true,
  });

  // find immidiate childrens and update parent and ancestors property
  const immidiateChildrens = await Category.find({ parent: id });

  immidiateChildrens.map((category) => {
    updateImidiateChildren(category._id, id);
  });

  res.status(200).send({
    success: true,
    message: "Category successfully updated.",
    category: category,
  });
});

// => delete category (Admin)
exports.deleteCategory = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  // find category
  let category = await Category.findById(id);

  if (!category) {
    return next(new ErrorHandler("Category not found.", 404));
  }
  category = await category.remove();

  // find immidiate childrens and update parent and ancestors property
  const immidiateChildrens = await Category.find({ parent: id });

  immidiateChildrens.map((category) => {
    updateImidiateChildren(category._id, null);
  });

  res.status(200).send({
    success: true,
    message: "Category successfully deleted.",
  });
});

// Get raw categories (Admin)
exports.getAdminCategories = catchAsyncError(async (req, res, next) => {
  const { name } = req.body;

  const categories = await Category.find({
    name: {
      $regex: name || "",
      $options: "i",
    },
  });

  if (!categories.length) {
    return next(new ErrorHandler("Category not found.", 404));
  }

  res.status(200).send({
    success: true,
    message: "Category found successfully.",
    categories: categories,
  });
});

// Get All category (User)
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
