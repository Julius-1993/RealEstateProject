import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";

export default function ReviewList({reviews}) {
  
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-2 px-2">
      <ul className="form-control">
        {reviews.map((review) => (
          <li key={review._id} className="py-4">
            <span className="flex flex-row">
            Rating:{" "}
            <Rating name="read-only" value={review.rating} readOnly />
            </span>
            <p>
              {review.userName}
            </p>
            <p>{review.comment}</p>
            <p>{new Date(review.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
