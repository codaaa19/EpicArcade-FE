import React, { useEffect, useState } from 'react';

const AllReviews: React.FC = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://localhost:8080/reviews/list-reviews') // replace with your API endpoint
      .then(response => response.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div>
      <h1>All reviews</h1>
      {reviews.map((review, index) => (
        <div key={index}>
          {/* Replace with your review structure */}
          <h2>{review.title}</h2>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AllReviews;