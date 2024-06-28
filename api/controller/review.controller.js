import Review from "../models/review.model.js";

export const getAllReview = async(req, res) => {
  try {
      const reviews = await Review.find();
      res.send(reviews)
  } catch (error) {
      res.status(400).json({error: error.message});
  }
}

export const createReview = async(req, res) => {
  const {userName, rating, comment } = req.body;
  try {
      const newReview = new Review({userName, rating, comment});
      const result = await newReview.save();
      res.status(201).send(result)

  } catch (error) {
      res.status(500).json({error: error.message});
  }
}