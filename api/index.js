import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import userAuthRouter from "./routes/user.auth.route.js";
import listingRouter from "./routes/listing.route.js";
import reviewRouter from "./routes/review.route.js";
import cookieParser from "cookie-parser";
import path from "path";

//INOITIALIZE DOTENV
dotenv.config();

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log(`MongoDB Connected…`);
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();
  // INITIALIZE EXPRESS
const app = express();

//Initialize JSON Object
app.use(express.json());

app.use(cookieParser());

// USED OF PAGES ROUTER
app.use("/api/user", userRouter);
app.use("/api/auth", userAuthRouter);
app.use("/api/listing", listingRouter);
app.use("/api/", reviewRouter);

app.use(express.static(path.join(__dirname, "/AJ-EstateApp/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "AJ-EstateApp", "dist", "index.html"));
})

// Error Handler USING MIDLEWARE
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 404;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ 
    success: false,
    statusCode,
    message,
  });
});

// SERVER LISTEN
app.listen(3000, () => {
  console.log(`server start on Port 3000`);
});
