const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const client = require("prom-client"); // Metric Collection
const responseTime = require("response-time");

console.clear();

const app = express();

// =>
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

const reqResTime = new client.Histogram({
  name: "http_express_req_res_time",
  help: "This tells how much time is taken by req and res.",
  labelNames: ["method", "route", "status_code"],
  buckets: [1, 50, 100, 200, 400, 500, 800, 1000, 2000],
});

const totalRequestCounter = new client.Counter({
  name: "total_req",
  help: "Tells total request.",
});

/******* MiddleWare ********/
app.use(
  responseTime((req, res, time) => {
    totalRequestCounter.inc();
    reqResTime
      .labels({
        method: req.method,
        route: req.url,
        status_code: res.statusCode,
      })
      .observe(time);
  })
);
app.use(express.static("build"));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://digimart-frontend.vercel.app"],
  })
);
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use(cookieParser());

//config .env
dotenv.config({ path: "./config/config.env" });

// Send metrics from promp-client
app.get("/metrics", async (req, res, next) => {
  res.setHeader("Content-Type", client.register.contentType);

  const metrics = await client.register.metrics();

  res.send(metrics);
});

// API Route import
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoutes");
const orderRoute = require("./routes/orderRoute");
const paymentRoute = require("./routes/paymentRoute");
const mediaRoute = require("./routes/mediaRoute");
const categoryRoute = require("./routes/categoryRoute");
const brandRoute = require("./routes/brandRoute");

app.use("/api/v1", userRoute);
app.use("/api/v1", productRoute);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", brandRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", paymentRoute);
app.use("/api/v1", mediaRoute);

// serve static file(Front-End => React App)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// middleware for error handling
const ErrorHandler = require("./middleware/error");
app.use(ErrorHandler);

module.exports = app;
