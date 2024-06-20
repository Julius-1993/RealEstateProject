import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'property',
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: Number,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now
  }

}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);

export default Review;