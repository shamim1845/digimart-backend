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

  if (!orders.length) {
    return next(new ErrorHandler("Currently you have not any order", 404));
  }

  // sort orders
  const sorted_orders = orders.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  res.status(200).json({
    success: true,
    message: "Orders found successFully.",
    orders: sorted_orders,
    oredrCount: sorted_orders.length,
  });
});

// get all order details (for admin)
exports.getAllOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find();
  if (!orders.length) {
    return next(new ErrorHandler("Opps! No order found.", 404));
  }

  // sort orders
  const sorted_orders = orders.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  res.status(200).json({
    success: true,
    message: "Orders found successFully.",
    orders: sorted_orders,
    oredrCount: sorted_orders.length,
  });
});

// Update order Status (for admin)
exports.updateOrderStatus = catchAsyncError(async (req, res, next) => {
  const { status } = req.body;

  // Find order exist or not
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new ErrorHandler("Opps! No order found.", 404));
  }

  // check order already delivered or not
  if (order.orderStatus === "delivered" && status !== ("return" || "closed")) {
    return next(
      new ErrorHandler("You have already delivered this product.", 400)
    );
  } else if (order.orderStatus === "return" && status !== "closed") {
    return next(new ErrorHandler("You have already return this product.", 400));
  }

  // Update product stock
  if (status === "processing") {
    order.orderItems.forEach(async (product) => {
      await updateStock(product.productId, product.quantity, "decrement");
    });
  } else if (status === "return") {
    order.orderItems.forEach(async (product) => {
      await updateStock(product.productId, product.quantity, "increment");
    });
  }

  // update order status
  order.orderStatus = status;
  if (req.body.status === "delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: true });

  res.status(200).json({
    success: true,
    message: "Order status update successfully.",
    order,
  });
});

const updateStock = async (productId, quantity, type) => {
  // find product
  const product = await Product.findById(productId);
  if (!product) return;

  if (type === "increment") {
    product.stock += quantity;
    return await product.save();
  } else if (type === "decrement") {
    if (product?.stock > 0) {
      product.stock -= quantity;
      return await product.save();
    }
  }
};

// delete order  (for admin)
exports.deleteOrder = catchAsyncError(async (req, res, next) => {
  //  find order
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new ErrorHandler("Opps! No order found.", 404));
  }

  // check order status is closed or not
  if (order.orderStatus !== "closed") {
    return next(
      new ErrorHandler(
        "Oops! Order can't be deleted until its status is closed.",
        400
      )
    );
  }

  await order.remove();

  res.status(200).json({
    success: true,
    message: "Order delete successFully.",
    order,
  });
});
