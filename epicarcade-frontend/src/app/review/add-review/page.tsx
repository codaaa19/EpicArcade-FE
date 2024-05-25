'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './AddReview.css';

export default function AddReview() {
  const [id_game, setIdGame] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const review = {
      id_game,
      rating,
      comment,
    };

    try {
      const response = await fetch('http://localhost:8080/reviews/add-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }

      const data = await response.json();
      console.log('Success:', data);
      router.push('/review');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="background">
      <div className="container">
        <h1>Add your review</h1>
        <form onSubmit={handleSubmit} className="form">
          <label>
            ID Game:
            <input
              type="text"
              value={id_game}
              onChange={(e) => setIdGame(e.target.value)}
            />
          </label>
          <label>
            Rating:
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </label>
          <label>
            Comment:
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
