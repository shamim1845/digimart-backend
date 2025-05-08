const Order = require("../models/orderModel");
const Brand = require("../models/BrandModel");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.getAnalytics = catchAsyncError(async (req, res, next) => {
    const { period = "15" } = req.query;

    const now = new Date();
    const thirtyDaysAgo = new Date(now);
    thirtyDaysAgo.setDate(now.getDate() - period);

    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    // Only select paymentInfo and createdAt
    const ordersInLast30Days = await Order.find(
        { createdAt: { $gte: thirtyDaysAgo } },
        { paymentInfo: 1, createdAt: 1 }
    );


    const totalRevenueInPeriod = ordersInLast30Days?.reduce(
        (sum, order) => sum + order?.paymentInfo?.totalPrice,
        0
    );
    const totalOrdersInPeriod = ordersInLast30Days?.length || 0;

    const todaysOrders = await Order.find(
        {
            createdAt: { $gte: startOfToday, $lte: endOfToday },
        },
        { paymentInfo: 1, createdAt: 1 }
    );

    const todaysRevenue = todaysOrders?.reduce(
        (sum, order) => sum + order?.paymentInfo?.totalPrice,
        0
    );

    const totalBrands = await Brand.countDocuments() || 0;

    const data = {
        totalRevenueInPeriod,
        totalOrdersInPeriod,
        todaysRevenue,
        totalBrands,
    };

    res.status(200).json({
        success: true,
        message: "Analytics data fetched successfully.",
        data,
    });
});
