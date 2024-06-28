import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userName: String,
  rating: Number,
  comment: String,
  createdAt:{
    type: Date,
    default: Date.now
  }

}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);

export default Review;