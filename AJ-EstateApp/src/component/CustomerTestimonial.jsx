import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";



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
    <div className=" w-full py-40 px-8">
      <ReviewList reviews={reviews} />
    </div>
  );
}
