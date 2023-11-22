const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");
const { logger } = require("../utils/loger");

// create a product -- (Admin)
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const { name, description, price, images, categories } = req.body;

  // Validation
  if (!name || !description || !price || !images || !categories.length) {
    res.status(400).json({
      success: false,
      message:
        "Product name, description, price, images, and category is required",
    });
  }

  // Add user
  req.body.user = req.user._id;

  // Create product
  const product = await Product.create(req.body);

  res
    .status(201)
    .json({ success: true, message: "Product created successfully.", product });
});

// Update a product -- (Admin)
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res
    .status(200)
    .json({ success: true, message: "Product update successfully.", product });
});

// Delete a product -- (Admin)
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  product = await product.remove();

  res
    .status(200)
    .json({ success: true, message: "Product deleted successfully.", product });
});

// Get all product
exports.getAllProduct = catchAsyncError(async (req, res, next) => {
  const resultPerPage = req.query?.limit || 20;

  let apiFeature, products;

  apiFeature = new ApiFeatures(Product.find(), req.query).search().filter();
  // Count product
  const productCount = await apiFeature.query.countDocuments();

  if (!productCount) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  // Client side pagination
  let total_page = Math.ceil(productCount / resultPerPage);
  let pagination = [];
  for (let i = 1; i <= total_page; i++) {
    pagination.push(i);
  }

  // Find products
  apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  products = await apiFeature.query;

  logger.info("Products found successfully.");
  res.status(200).json({
    success: true,
    message: "Products found successfully.",
    productCount,
    products,
    pagination,
  });
});

// Product Details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  res
    .status(200)
    .json({ success: true, message: "Product found successfully.", product });
});

// => New Arrivals utils (for recent data)
const timeToBack = 12 * 30 * 24 * 60 * 60 * 1000;

// => New Arrivals Categories
exports.newArivalsCategories = catchAsyncError(async (req, res, next) => {
  const searchDate = Date.now() - timeToBack;

  const products = await Product.find({ createdAt: { $gt: searchDate } });

  if (!products.length) {
    return next(new ErrorHandler("New Arrivals Categories not found.", 404));
  }

  // find Categories
  const categories = products.reduce((acc, product) => {
    return [...acc, product.categories[0].category_slug];
  }, []);

  let allCategories = [...new Set(categories)];

  res.status(200).json({
    success: true,
    message: "New Arrivals Categories found successfully.",
    allCategories,
  });
});

// => New Arrivals
exports.newArivals = catchAsyncError(async (req, res, next) => {
  const searchDate = Date.now() - timeToBack;
  const resultPerPage = 20;

  let apiFeature, products;

  apiFeature = new ApiFeatures(
    Product.find({ createdAt: { $gt: searchDate } }),
    req.query
  ).filter();

  // Count product
  const productCount = await apiFeature.query.countDocuments();

  if (!productCount) {
    return next(new ErrorHandler("New Arrivals products not found.", 404));
  }

  // Client side pagination
  let total_page = Math.ceil(productCount / resultPerPage);
  let pagination = [];
  for (let i = 1; i <= total_page; i++) {
    pagination.push(i);
  }

  // find products
  apiFeature = new ApiFeatures(
    Product.find({ createdAt: { $gt: searchDate } }),
    req.query
  )
    .filter()
    .pagination(resultPerPage);

  products = await apiFeature.query;

  res.status(200).json({
    success: true,
    message: "New Arrivals products found successfully.",
    products,
    pagination,
  });
});

// Get product review by user id
exports.getProductReview = catchAsyncError(async (req, res, next) => {
  // find product exist or not
  let product = await Product.findById(req.params.productId);

  // check product exist or not
  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  // get review bu user id
  const review = product.reviews.find(
    (review) => review.userId.toString() === req.user._id.toString()
  );

  res.status(200).json({
    success: true,
    message: "Product review found successfully.",
    review,
  });
});

// Create New Review or Update the Review
exports.createProductReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, images } = req.body;

  // find product exist or not
  let product = await Product.findById(req.params.productId);

  // check product exist or not
  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  // construct review
  const review = {
    userId: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment: comment,
    images: images,
  };

  // check already have any reviews or not
  if (product.reviews.length > 0) {
    // check user already reviewed or not
    const isReviewed = product.reviews.find(
      (review) => review.userId.toString() === req.user._id.toString()
    );

    // if already reviewed update review
    if (isReviewed) {
      isReviewed.rating = rating;
      isReviewed.comment = comment;
      isReviewed.images = images;
    } else {
      // else add new review
      product.reviews.push(review);
    }
  } else {
    // if reviews is empty add new review
    product.reviews.push(review);
  }

  // Update total totalReviews
  product.totalReviews = product.reviews.length;

  // Update avgRating
  let total_rating = product.reviews.reduce((acc, review) => {
    return (acc += review.rating);
  }, 0);

  product.avgRating = Number.parseFloat(
    total_rating / product.reviews.length
  ).toFixed(1);

  // Update ratings
  let ratings = {
    rating1: 0,
    rating2: 0,
    rating3: 0,
    rating4: 0,
    rating5: 0,
  };

  product.reviews.map((rev) => {
    if (rev.rating === 1) {
      ratings.rating1 += 1;
    } else if (rev.rating === 2) {
      ratings.rating2 += 1;
    } else if (rev.rating === 3) {
      ratings.rating3 += 1;
    } else if (rev.rating === 4) {
      ratings.rating4 += 1;
    } else if (rev.rating === 5) {
      ratings.rating5 += 1;
    }
  });

  product.ratings = ratings;

  product = await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: "Product reviewed successfully.",
    product,
  });
});

// Delete Review of a single Product
exports.deleteReview = catchAsyncError(async (req, res, next) => {
  // find product exist or not
  let product = await Product.findById(req.params.productId);

  // check product exist or not
  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  // Update reviews
  const newReviews = product.reviews.filter(
    (review) => review.userId.toString() !== req.user._id.toString()
  );

  product.reviews = newReviews;

  // Update total totalReviews
  product.totalReviews = product.reviews.length;

  // Update avgRating
  let total_rating = product.reviews.reduce((acc, review) => {
    return (acc += review.rating);
  }, 0);

  if (total_rating === 0) {
    product.avgRating = 0;
  } else {
    product.avgRating = Number.parseFloat(
      total_rating / product.reviews.length
    ).toFixed(1);
  }

  // Update ratings
  let ratings = {
    rating1: 0,
    rating2: 0,
    rating3: 0,
    rating4: 0,
    rating5: 0,
  };

  product.reviews.map((rev) => {
    if (rev.rating === 1) {
      ratings.rating1 += 1;
    } else if (rev.rating === 2) {
      ratings.rating2 += 1;
    } else if (rev.rating === 3) {
      ratings.rating3 += 1;
    } else if (rev.rating === 4) {
      ratings.rating4 += 1;
    } else if (rev.rating === 5) {
      ratings.rating5 += 1;
    }
  });

  product.ratings = ratings;

  product = await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: "Review delete successfully.",
    product,
  });
});
