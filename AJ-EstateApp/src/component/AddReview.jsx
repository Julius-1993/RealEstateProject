import React, { useState } from 'react'
import axios from 'axios';

export const AddReview = ({ propertyId, onReviewAdded }) => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const res = await axios.post("/api/reviews", {
        propertyId,
        rating,
        comment,
      });
      onReviewAdded(res.data);
      setRating(" ");
      setComment(" ");
    } catch (error){
      console.error('Error adding review', error);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-2 items-center justify-center" >
      <div className="form-control" >
        <label className="label">Rating:</label>
        <input className="input input-bordered" type="Number" value={rating} onChange={(e) => setRating(e.target.value)} required />
      </div>
      <div className="form-control">
        <label className="label">Comment:</label>
        <textarea className="textarea textarea-primary" placeholder="Comment here" type="text" value={comment} onChange={(e) => setComment(e.target.value)} required />
      </div>
      <button type='submit' className="btn btn-primary my-5">Submit Review</button>
    </form>
  )
}
