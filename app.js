const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

console.clear();

const app = express();
/******* MiddleWare ********/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//config
dotenv.config({ path: "./config/config.env" });

// Route import
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoutes");
const orderRoute = require("./routes/orderRoute");
const paymentRoute = require("./routes/paymentRoute");

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", paymentRoute);

// middleware for error handling

const ErrorHandler = require("./middleware/error");
app.use(ErrorHandler);

module.exports = app;
