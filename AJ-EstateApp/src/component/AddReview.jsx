import React, { useState } from "react";
import Rating from "@mui/material/Rating";

export const AddReview = ({ onAddReview }) => {
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { userName, rating, comment };
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });
      const data = await res.json();
      onAddReview(data);
      setRating(0);
      setComment("");
      console.log(newReview)
    } catch (error) {
      console.error("Error adding review", error);
    }
  };
  return (
    <div className="py-8 -z-10">
      <form onSubmit={handleSubmit} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-4 mx-auto py-8">
        <div className="form-control rating">
          <label className="label">Rating:</label>
          <Rating
            component="legend"
            name="simple-controlled"
            value={rating}
            precision={0.5}
            onChange={(e, newValue) => {
              setRating(newValue);
            }}
          />
        </div>
        <div className="form-control">
          <label className="label">Name:</label>
          <input
            className="input input-bordered"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">Comment:</label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Comment here"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary my-5">
          Submit Review
        </button>
      </form>
    </div>
  );
};
