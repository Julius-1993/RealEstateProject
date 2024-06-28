import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import { AddReview } from "./AddReview";


export default function CustomerTestimonial() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  const addReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="px-4 py-6 w-full">
      <ReviewList reviews={reviews} />
    </div>
  );
}
