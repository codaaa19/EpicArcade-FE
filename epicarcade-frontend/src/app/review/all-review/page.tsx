'use client';

import React, { useEffect, useState } from 'react';
import './AllReviews.css';

export default function AllReviews(){
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/reviews/list-reviews')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        setReviews(data);
      })
      .catch(error => {
        console.log("ERROR");
      });
  }, []);

  return (
    <div className="container">
      <h1>All Reviews</h1>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <h2>Id-game: {review.id_game}</h2>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </div>
        ))
      ) : (
        <p className="no-reviews">No reviews available.</p>
      )}
    </div>
  );
};
