import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ReviewList({ listingId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/reviews?propertyId=${listingId}`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching Reviews", error);
      }
    };
    fetchReviews();
  }, [listingId]);
  return (
    <div>
    <h3>Reviews</h3>
    {reviews.length === 0 ? (
      <p>No reviews yet</p>
    ) : (
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.rating} stars</strong>
          </li>
        ))}
      </ul>
    )}
    </div>
  );
}
