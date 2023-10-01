const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const OrderStatus = require("../models/orderStatusModel");
const slugify = require("../helpers/slugify");

// Create  Order status
exports.createOrderStatus = catchAsyncError(async (req, res, next) => {
  const { name, description } = req.body;

  //   Validation
  if (!name || !description) {
    return next(new ErrorHandler("Name and Description is required.", 400));
  }

  // Find order status already exist or not
  const prevOrderStatus = await OrderStatus.findOne({ status: slugify(name) });

  if (prevOrderStatus) {
    return res.status(400).send({
      success: false,
      message: "OrderStatus already exist.",
    });
  }

  const orderStatus = await OrderStatus.create({
    name,
    description,
  });

  res.status(201).send({
    success: true,
    message: "OrderStatus successfully created.",
    orderStatus,
  });
});

// Update  Order status
exports.updateOrderStatus = catchAsyncError(async (req, res, next) => {
  const { name, description } = req.body;
  const { id } = req.params;

  // Find orderStatus  exist or not
  let orderStatus = await OrderStatus.findById(id);

  if (!orderStatus) {
    return res.status(404).send({
      success: false,
      message: "OrderStatus not found.",
    });
  }

  orderStatus.name = name;
  orderStatus.description = description;

  await orderStatus.save({
    validateBeforeSave: true,
  });

  res.status(200).send({
    success: true,
    message: "OrderStatus successfully updated.",
    orderStatus,
  });
});

// Delete  OrderStatus
exports.deleteOrderStatus = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  // Find orderStatus  exist or not
  let orderStatus = await OrderStatus.findById(id);

  if (!orderStatus) {
    return res.status(404).send({
      success: false,
      message: "OrderStatus not found.",
    });
  }

  await orderStatus.remove();

  res.status(200).send({
    success: true,
    message: "OrderStatus successfully deleted.",
    orderStatus,
  });
});

// Get All  OrderStatus
exports.getAllOrderStatus = catchAsyncError(async (req, res, next) => {
  // Find orderStatuses
  let orderStatuses = await OrderStatus.find();

  if (!orderStatuses.length) {
    return res.status(404).send({
      success: false,
      message: "OrderStatus not found.",
    });
  }

  res.status(200).send({
    success: true,
    message: "OrderStatus successfully found.",
    orderStatuses,
  });
});
