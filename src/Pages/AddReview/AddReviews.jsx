import React, { useState } from 'react';

const AddReviews = () => {
    const [review, setReview] = useState({ name: '', details: '', rating: '' });

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('https://pearl-bistro-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        });

        const data = await response.json();
        if (response.ok) {
            alert('Review added successfully!');
            setReview({ name: '', details: '', rating: '' });
        } else {
            alert('Error adding review');
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add Your Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={review.name} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded"
                    required
                />
                <textarea 
                    name="details" 
                    placeholder="Your Review" 
                    value={review.details} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded"
                    required
                ></textarea>
                <input 
                    type="number" 
                    name="rating" 
                    placeholder="Rating (1-5)" 
                    value={review.rating} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded"
                    min="1" max="5"
                    required
                />
                <button type="submit" className="w-full bg-yellow-600 text-white p-2 rounded">Submit Review</button>
            </form>
        </div>
    );
};

export default AddReviews;
