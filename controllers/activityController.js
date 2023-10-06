const catchAsyncError = require("../middleware/catchAsyncError");
const Activity = require("../models/activityModel");

// Get favourite item
exports.getFavouriteItem = catchAsyncError(async (req, res) => {
  //   find activity
  let activity = await Activity.findOne({ userId: req.user._id }).populate(
    "favourite"
  );

  if (!activity) {
    return res.status(404).send({
      success: false,
      message: "Your favourite list is empty.",
    });
  }

  res.status(200).send({
    success: true,
    message: "Favourites item found successfully.",
    favourites: activity.favourite,
  });
});

// Add favourite item
exports.addFavouriteItem = catchAsyncError(async (req, res) => {
  const { productId } = req.body;

  // validation
  if (!productId) {
    return res.status(400).send({
      success: false,
      message: "productId is required.",
    });
  }

  //   find activity
  let activity = await Activity.findOne({ userId: req.user._id });

  if (activity) {
    // update activity
    const exist = activity.favourite.find((id) => id == productId);

    if (exist) {
      return res.status(400).send({
        success: false,
        message: "Item already exist in your favourite list.",
        activity,
      });
    } else {
      activity.favourite = [...activity.favourite, productId];

      await activity.save({ validateModifiedOnly: true });

      res.status(201).send({
        success: true,
        message: "Item added in your favourite list.",
        activity,
      });
    }
  } else {
    // create new activity
    activity = await Activity.create({
      userId: req.user._id,
      favourite: [productId],
    });

    res.status(201).send({
      success: true,
      message: "Item added in your favourite list.",
      activity,
    });
  }
});

// Delete  item from favourite list
exports.deleteFavouriteItem = catchAsyncError(async (req, res) => {
  const { productId } = req.body;

  // validation
  if (!productId) {
    return res.status(400).send({
      success: false,
      message: "productId is required.",
    });
  }

  //   find activity
  let activity = await Activity.findOne({ userId: req.user._id });

  if (!activity) {
    return res.status(400).send({
      success: false,
      message: "You have no activity.",
    });
  }

  //   check item exist or not in favourite list
  const exist = activity.favourite.find((id) => id == productId);
  if (!exist) {
    return res.status(400).send({
      success: false,
      message: "Item doesn't exist in your favourite list.",
    });
  }

  // update activity
  const newFavouriteList = activity.favourite.filter((id) => id != productId);

  activity.favourite = newFavouriteList;
  await activity.save({ validateModifiedOnly: true });

  res.status(200).send({
    success: true,
    message: "Item remove from your favourite list.",
    activity,
  });
});

// Delete  item from favourite list
exports.emptyFavouriteItem = catchAsyncError(async (req, res) => {
  //   find activity
  let activity = await Activity.findOne({ userId: req.user._id });

  if (!activity) {
    return res.status(400).send({
      success: false,
      message: "You have no activity.",
    });
  }

  activity.favourite = [];
  await activity.save({ validateModifiedOnly: true });

  res.status(200).send({
    success: true,
    message: "Your favourite list is empty.",
    activity,
  });
});

// => => CART
// Get Cart items
exports.getCartItem = catchAsyncError(async (req, res) => {
  //   find activity
  let activity = await Activity.findOne({ userId: req.user._id }).populate(
    "cart.product"
  );

  if (!activity) {
    return res.status(404).send({
      success: false,
      message: "Your cart is empty.",
    });
  }

  res.status(200).send({
    success: true,
    message: "Cart items found successfully.",
    carts: activity.cart,
  });
});

// Add item to the cart
exports.addCartItem = catchAsyncError(async (req, res) => {
  const { productId, quantity } = req.body;

  // validation
  if (!productId || !quantity) {
    return res.status(400).send({
      success: false,
      message: "productId and quantity is required.",
    });
  }

  //   find activity
  let activity = await Activity.findOne({ userId: req.user._id });

  if (activity) {
    // update activity
    const exist = activity.cart.find((item) => item.product == productId);

    if (exist) {
      const newCartList = activity.cart.map((item) => {
        if (item.product == productId) {
          item.quantity = quantity;
        }
        return item;
      });

      activity.cart = newCartList;
      await activity.save({ validateModifiedOnly: true });

      return res.status(200).send({
        success: true,
        message: "Item quantity updated.",
        activity,
      });
    } else {
      activity.cart = [...activity.cart, { product: productId, quantity }];
      await activity.save({ validateModifiedOnly: true });

      res.status(201).send({
        success: true,
        message: "Item added in your cart.",
        activity,
      });
    }
  } else {
    // create new activity
    activity = await Activity.create({
      userId: req.user._id,
      cart: [{ product: productId, quantity }],
    });

    res.status(201).send({
      success: true,
      message: "Item added in your cart.",
      activity,
    });
  }
});

// Delete  item from cart
exports.deleteCartItem = catchAsyncError(async (req, res) => {
  const { productId } = req.body;

  // validation
  if (!productId) {
    return res.status(400).send({
      success: false,
      message: "productId is required.",
    });
  }

  //   find activity
  let activity = await Activity.findOne({ userId: req.user._id });

  if (!activity) {
    return res.status(400).send({
      success: false,
      message: "You have no activity.",
    });
  }

  //   check item exist or not in cart
  const exist = activity.cart.find((item) => item.product == productId);
  if (!exist) {
    return res.status(400).send({
      success: false,
      message: "Item doesn't exist in your cart.",
    });
  }

  // update activity
  const newCartList = activity.cart.filter((item) => item.product != productId);

  activity.cart = newCartList;
  await activity.save({ validateModifiedOnly: true });

  res.status(200).send({
    success: true,
    message: "Item remove from your cart.",
    activity,
  });
});

// Delete  item from cart
exports.emptyCartItem = catchAsyncError(async (req, res) => {
  //   find activity
  let activity = await Activity.findOne({ userId: req.user._id });

  if (!activity) {
    return res.status(400).send({
      success: false,
      message: "You have no activity.",
    });
  }

  activity.cart = [];
  await activity.save({ validateModifiedOnly: true });

  res.status(200).send({
    success: true,
    message: "Your cart is empty.",
    activity,
  });
});

// =>

// Get shipping info
exports.getShippingInfo = catchAsyncError(async (req, res) => {
  //   find activity
  let activity = await Activity.findOne({ userId: req.user._id });

  if (!activity) {
    return res.status(404).send({
      success: false,
      message: "You have no previous shipping information.",
    });
  }

  res.status(200).send({
    success: true,
    message: "Shipping info found successfully.",
    shippingInfo: activity.shippingInfo,
  });
});

// Add shipping info
exports.addShippingInfo = catchAsyncError(async (req, res) => {
  const { address, city, state, country, postCode, phoneNo } = req.body;

  // validation
  if (!address || !city || !state || !country || !postCode || !phoneNo) {
    return res.status(400).send({
      success: false,
      message:
        "address, city, state, country, postCode and, phoneNo is required.",
    });
  }

  //   find activity
  let activity = await Activity.findOne({ userId: req.user._id });

  if (activity) {
    // update activity
    activity.shippingInfo = {
      address,
      city,
      state,
      country,
      postCode,
      phoneNo,
    };

    activity.save({ validateModifiedOnly: true });

    res.status(201).send({
      success: true,
      message: "Shipping information saved successfully.",
      shippingInfo: activity.shippingInfo,
    });
  } else {
    // create new activity
    activity = await Activity.create({
      userId: req.user._id,
      shippingInfo: {
        address,
        city,
        state,
        country,
        postCode,
        phoneNo,
      },
    });

    res.status(201).send({
      success: true,
      message: "Shipping information saved successfully.",
      shippingInfo: activity.shippingInfo,
    });
  }
});
