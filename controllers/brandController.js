const catchAsyncError = require("../middleware/catchAsyncError");
const Brand = require("../models/BrandModel");
const slugify = require("../helpers/slugify");
const ErrorHandler = require("../utils/errorHandler");

// Create a new Brand
exports.createBrand = catchAsyncError(async (req, res) => {
  const { name } = req.body;

  const PrevBrand = await Brand.findOne({ slug: slugify(name) });

  if (PrevBrand) {
    console.log(PrevBrand);

    return res.status(400).send({
      success: false,
      message: "Brand already exist.",
    });
  }

  const brand = await Brand.create({
    name: name,
  });

  res.status(201).send({
    success: true,
    message: "Brand successfully created.",
    brand: brand,
  });
});

// Update a Brand
exports.editBrand = catchAsyncError(async (req, res) => {
  const { name } = req.body;

  let brand = await Brand.findById(req.params.id);

  if (!brand) {
    return res.status(404).send({
      success: false,
      message: "Brand not found.",
    });
  }

  brand.name = name;

  brand = await brand.save({
    validateModifiedOnly: true,
  });

  res.status(200).send({
    success: true,
    message: "Brand successfully updated.",
    brand: brand,
  });
});

// Delete Brand
exports.deleteBrand = catchAsyncError(async (req, res) => {
  let brand = await Brand.findById(req.params.id);

  if (!brand) {
    return res.status(404).send({
      success: false,
      message: "Brand not found.",
    });
  }

  brand = await brand.remove();

  res.status(200).send({
    success: true,
    message: "Brand successfully deleted.",
    brand,
  });
});

// Get Brands
exports.getAllBrands = catchAsyncError(async (req, res, next) => {
  const brands = await Brand.find();

  if (!brands.length) {
    return next(new ErrorHandler("Brand not found.", 404));
  }

  res.status(201).send({
    success: true,
    message: "Brands successfully found.",
    brands: brands,
  });
});
