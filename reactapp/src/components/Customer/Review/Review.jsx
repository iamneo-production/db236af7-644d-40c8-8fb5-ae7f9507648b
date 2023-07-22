import React, { useState } from 'react';
import './Review.css';

const Popup = ({ message, onConfirm, onCancel }) => (
  <div className="popup">
    <div className="popup-content">
      <p>{message}</p>
      <div className="popup-buttons">
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  </div>
);

const ReviewForm = ({ addReview }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = () => {
    // Create a new review object
    const newReview = {
      name,
      rating,
      comment,
    };

    // Call the addReview function passed from the parent component
    addReview(newReview);

    // Clear the form
    setName('');
    setRating(0);
    setComment('');
    setShowConfirmation(false);

    submitReview(newReview);
  };

  const handleCancelSubmit = () => {
    setShowConfirmation(false);
  };

  const submitReview = (reviewData) => {
    // Make an HTTP POST request to backend API endpoint
    fetch('http://localhost:8081/user/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend
        console.log('Review submitted successfully:', data);
      })
      .catch(error => {
        // Handle any error that occurred during the request
        console.error('Error submitting review:', error);
      });
  };


  return (
    <form onSubmit={handleSubmit}>
    <div className='review'>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={rating >= star ? 'star filled' : 'star'}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        placeholder="Write your comments..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit">Submit Review</button>

      {showConfirmation && (
        <Popup
          message="Are you sure you want to submit the review?"
          onConfirm={handleConfirmSubmit}
          onCancel={handleCancelSubmit}
        />
      )}
      </div>
    </form>
  );
};

const Review = ({ review }) => (
    <div>
      {/* Remove the name section */}
      {/* Remove the comment section */}
    </div>
  );

const ReviewList = ({ reviews }) => (
  <div>
    {reviews.map((review, index) => (
      <Review key={index} review={review} />
    ))}
  </div>
);

const App = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = (newReview) => {
    // Add the new review to the existing reviews
    const updatedReviews = [...reviews, newReview];

    // Update the reviews state
    setReviews(updatedReviews);
  };

  return (
    <div className='heading'>
      <h1>Review</h1>
      <ReviewForm addReview={addReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default App;
