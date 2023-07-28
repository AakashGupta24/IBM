// StarRating.js
import React from 'react';

const StarRating = ({ rating }) => {
  // Calculate the number of filled stars (whole number part of the rating)
  const filledStars = Math.floor(rating);

  // Create an array of 5 stars with the appropriate class to fill/unfill them
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < filledStars ? 'star filled' : 'star'}>
      ★
    </span>
  ));

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
