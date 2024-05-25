'use client';

import React, { useEffect, useState } from 'react';
import './AllReviews.css';

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [games, setGames] = useState({});

  useEffect(() => {
    // Fetch reviews
    fetch('http://localhost:8080/reviews/list-reviews')
      .then(response => response.json())
      .then(data => {
        setReviews(data);
        // Fetch games after reviews are loaded
        fetch('http://localhost:8080/reviews/games')
          .then(response => response.json())
          .then(gamesData => {
            // Create a dictionary mapping game IDs to game names
            const gamesDict = {};
            gamesData.forEach(game => {
              gamesDict[game.id] = game.name;
            });
            setGames(gamesDict);
          })
          .catch(error => {
            console.error('Error fetching games:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>All Reviews</h1>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <h2 className="id-games">Id-game: {games[review.id_game] || review.id_game}</h2>
            {/* <h2 className="id-asli">Id-Asli: {review.id_game}</h2> */}
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </div>
        ))
      ) : (
        <p className="no-reviews">No reviews available.</p>
      )}
    </div>
  );
}
