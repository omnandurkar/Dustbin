import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from '../../components/Navbar/Navbar';
import ReviewCard from '../../components/ReviewCard';

export default function Reviews() {
  const userName = localStorage.getItem('userName');
  const uPhoto = localStorage.getItem('userPhoto');

  const [message, setMessage] = useState('');
  const [reviews, setReviews] = useState([]);

  const loadReview = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/review`);
      setReviews(response.data.data);
      toast.success('Reviews Loaded');
    } catch (error) {
      console.error('Error loading reviews:', error);
      toast.error('Failed to load reviews');
    }
  };

  useEffect(() => {
    loadReview();
  }, []);

  const addReview = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/review`, {
        name: userName,
        message: message,
        userPhoto: uPhoto,
      });
      toast.success(response.data.message);
      loadReview();
      reset();
    } catch (error) {
      console.error('Error adding review:', error);
      toast.error('Failed to add review');
    }
  };

  const reset = () => {
    setMessage('');
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="col-12 col-sm-7 card m-auto shadow p-4 mt-5">
          <h1 className="text-center text-info-emphasis text-2xl font-bold">Add Review</h1>
          <hr className="my-4" />
          <p className="mb-2">
            Name: <span className="font-semibold">{userName}</span>
          </p>
          <p className="mb-2">Review:</p>
          <input
            type="text"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-3 p-2 px-3 rounded border border-black w-full"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={reset}
              className="btn btn-outline-info px-4 py-2 mr-3 text-sm font-semibold"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={addReview}
              className="btn btn-info px-4 py-2 text-sm font-semibold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h1 className="text-center text-info-emphasis text-2xl font-bold mb-4">Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review._id} {...review} loadReview={loadReview} />
          ))}
        </div>
      </div>
    </>
  );
}
