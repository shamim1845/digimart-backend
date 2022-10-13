const product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");
const { set } = require("mongoose");

// create product -- Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const { name, description, price, images, category, reviews } = req.body;
  if (!name || !description || !price || !images || !category ) {
    res.json({ message: "please fill all of this details" });
  } else {
    console.log(req.body);
    // req.body.reviews[0].userId = req.user._id;
    req.body.user = req.user._id;
    const Product = await product.create(req.body);

    res.status(201).json({ message: "product created", Product });
  }
});

// Get all product
exports.getAllProduct = catchAsyncError(async (req, res) => {
  const resultPerPage = 20;
  const productCount = await product.countDocuments();

  // categories find
  const categoriesProducts = await product.find();
  let categories = [];
   categoriesProducts.map((product) => {
      categories.push(product.category);
  })
  let allCategories = [...new Set(categories)];

  console.log(req.query.page);

    // pagination
    let pageList = productCount/resultPerPage;
    pageList = Math.ceil(pageList);
   
    let page = [];
    for(let i=1; i<=pageList; i++) {
        page.push(i)
    }
 
  let apiFeature;
  if(req.query.page) {
     apiFeature = new ApiFeatures(product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    
  }else{
    apiFeature = new ApiFeatures(product.find(), req.query)
    .search()
    .filter();

    page = [];
  }
  const products = await apiFeature.query;

   
   



  res.status(200).json({ message: " all product ready", products  , productCount, page, allCategories});
});

// Product Details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const Product = await product.findById(req.params.id);
  if (!Product) {
    return next(new ErrorHandler("product not founds", 404));
  }

  res.status(200).json({ message: "product ready", Product});
});

// Update a product
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let Product = await product.findById(req.params.id);
  if (!Product) {
    return next(new ErrorHandler("product not founds", 404));
  }
  Product = await product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({ message: "product update", Product });
});

// Delete a product
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  let Product = await product.findById(req.params.id);
  if (!Product) {
    return next(new ErrorHandler("product not founds", 404));
  } else {
    await Product.remove();
    res.status(200).json({ success: true, message: "product deleted" });
  }
});



// Create New Review or Update the Review
exports.createProductReview = catchAsyncError( async(req, res, next) => {
  const {rating, comment, productId, images} = req.body;
  // console.log(images);

  const review = {
    userId: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment: comment,
    images: images
  }

  const Product = await product.findById(productId);
  
  if(Product.reviews !== []) {
    const isReviewed = Product.reviews.find(
      (rev) => rev.userId.toString() === req.user._id.toString()
      );
      console.log(isReviewed);
      if(isReviewed) {
            isReviewed.rating = rating;
            isReviewed.comment = comment;
            isReviewed.images = images;
      }else{
        Product.reviews.push(review);
    }
   
  }else{
    Product.reviews.push(review);
}
 
    Product.numOfReviews = Product.reviews.length

  let avg = 0;
  Product.reviews.forEach((rev) => {
    avg += rev.rating;
}) 
  Product.avgRatings = Number.parseFloat(avg / Product.reviews.length).toFixed(1);

  const reviews = Product.reviews;
  let reviewDetails = {
      rating1: 0,
      rating2: 0,
      rating3: 0,
      rating4: 0,
      rating5: 0,
  };
  reviews.map((rev) => {
 

    if(rev.rating===1) {
     reviewDetails.rating1 += 1 
    }else if(rev.rating===2) {
      reviewDetails.rating2 += 1 
      
    }else if(rev.rating===3) {
      reviewDetails.rating3 += 1 
      
    }else if(rev.rating===4) {
      reviewDetails.rating4 += 1 
      
    }else{
      reviewDetails.rating5 += 1 

    }
  })

  Product.reviewDetails = reviewDetails;

  
  await Product.save({validateBeforeSave: false});

  res.status(200).json({
    success: true,
    Product
  })
});


// Get All Reviews of a single Product
exports.getProductReviews = catchAsyncError( async(req, res, next) => {
 console.log(req.query.id);

  const Product = await product.findById(req.query.id);

  if(!Product) {
    return next(new ErrorHandler("Product not found", 400))
  }

  const reviews = Product.reviews;
  let reviewDetails = {
      rating1: 0,
      rating2: 0,
      rating3: 0,
      rating4: 0,
      rating5: 0,
  };
  reviews.map((rev) => {
    console.log(rev);

    if(rev.rating===1) {
     reviewDetails.rating1 += 1 
    }else if(rev.rating===2) {
      reviewDetails.rating2 += 1 
      
    }else if(rev.rating===3) {
      reviewDetails.rating3 += 1 
      
    }else if(rev.rating===4) {
      reviewDetails.rating4 += 1 
      
    }else{
      reviewDetails.rating5 += 1 

    }
  })

  Product.reviewDetails = reviewDetails;
  
  await Product.save({validateBeforeSave: false});


  res.status(200).json({
    success: true,
    Product,
    reviews,
    reviewDetails

  })
});



// Delete Reviews of a single Product
exports.deleteReviews = catchAsyncError(async(req, res, next) => {
 
   const Product = await product.findById(req.query.productId);

   if(!Product) {
     return next(new ErrorHandler("Product not found", 400))
   }

   const newReviews = Product.reviews.filter((rev) => rev._id.toString() !== req.query.reviewId.toString());

   let avg = 0;
   newReviews.forEach((rev) => {
     avg += rev.rating;
 });

 const avgRatings = Number.parseFloat(avg / newReviews.length).toFixed(1); 
 const numOfReviews =newReviews.length;


 
  let reviewDetails = {
      rating1: 0,
      rating2: 0,
      rating3: 0,
      rating4: 0,
      rating5: 0,
  };
  newReviews.map((rev) => {
    console.log(rev);

    if(rev.rating===1) {
     reviewDetails.rating1 += 1 
    }else if(rev.rating===2) {
      reviewDetails.rating2 += 1 
      
    }else if(rev.rating===3) {
      reviewDetails.rating3 += 1 
      
    }else if(rev.rating===4) {
      reviewDetails.rating4 += 1 
      
    }else{
      reviewDetails.rating5 += 1 

    }
  })


 
 await product.findByIdAndUpdate(req.query.productId, {
   reviews: newReviews, avgRatings, numOfReviews, reviewDetails
 }, {new: true, runValidators: true, useFindAndModify: false});

 
 
   res.status(200).json({
     success: true,
   })
 })