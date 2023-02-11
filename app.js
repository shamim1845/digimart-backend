const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

console.clear();

const app = express();
/******* MiddleWare ********/
app.use(express.static("build"));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://digimart-frontend.vercel.app"],
  })
);
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use(cookieParser());

//config
dotenv.config({ path: "./config/config.env" });

// Route import
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoutes");
const orderRoute = require("./routes/orderRoute");
const paymentRoute = require("./routes/paymentRoute");
const mediaRoute = require("./routes/mediaRoute");

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", paymentRoute);
app.use("/api/v1/media", mediaRoute);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// middleware for error handling

const ErrorHandler = require("./middleware/error");
app.use(ErrorHandler);

module.exports = app;
