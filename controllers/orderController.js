const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

// Create new Order
exports.newOrder = catchAsyncError(async (req, res, next) => {
  const { shippingInfo, orderItems, paymentInfo } = req.body;
  const orderedUser = req.user._id;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    orderedUser,
    paymentInfo,
  });

  res.status(201).json({
    success: true,
    message: "Order Successfull",
    order,
  });
});

// get logged in user single order details
exports.getSingleOrderDetails = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "orderedUser",
    "name email"
  );

  if (!order) {
    return next(new ErrorHandler("Order not found", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// get logged in user all order details
exports.myOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find({ orderedUser: req.user._id });

  if (!orders) {
    return next(new ErrorHandler("Currently you have not any order", 404));
  }

  res.status(200).json({
    success: true,
    orders,
    oredrCount: orders.length,
  });
});

// get all order details (for admin)
exports.getAllOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.paymentInfo.totalPrice;
  });

  if (!orders) {
    return next(new ErrorHandler("Opps! No order found.", 404));
  }

  res.status(200).json({
    success: true,
    orders,
    totalAmount,
    oredrCount: orders.length,
  });
});

// Update order Status (for admin)
exports.updateOrderStatus = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new ErrorHandler("Opps! No order found.", 404));
  }
  if (order.orderStatus === "Delivered") {
    return next(
      new ErrorHandler("You have already delivered this product", 404)
    );
  }

  order.orderItems.forEach(async (product) => {
    await updateStock(product.productId, product.quantity);
  });

  order.orderStatus = req.body.status;
  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    order,
  });
});

const updateStock = async (productId, quantity) => {
  const product = await Product.findById(productId);
  if (product.stock > 0) {
    product.stock -= quantity;
  }

  await product.save({ validateBeforeSave: false });
};

// delete order  (for admin)
exports.deleteOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new ErrorHandler("Opps! No order found.", 404));
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
});
