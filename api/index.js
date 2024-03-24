import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import userAuthRouter from "./routes/user.auth.route.js";

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

const app = express();

//Initialize JSON Object
app.use(express.json());

// USED OF PAGES ROUTER
app.use("/api/user", userRouter);
app.use("/api/auth", userAuthRouter);

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
