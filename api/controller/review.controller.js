import Review from "../models/review.model.js";

export const getAllReview = async(req, res) => {
  const {propertyId} = req.query;
  try {
      const reviews = await Review.find({propertyId});
      res.status(200).json(reviews)
  } catch (error) {
      res.status(400).json({error: error.message});
  }
}

export const makeReview = async(req, res) => {
  const {propertyId, rating, comment } = req.body;
  try {
      const review = new Review({propertyId, rating, comment});
      const result = await review.save();
      res.status(201).json(result)

  } catch (error) {
      res.status(500).json({error: error.message});
  }
}