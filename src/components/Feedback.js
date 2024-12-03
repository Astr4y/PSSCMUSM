import React from 'react';
import { NavLink } from 'react-router-dom';

const Feedback = () => {
    return (
        <div className="feedback-container">
            <h2>Kami Menghargai Maklum Balas Anda</h2>
            <p>Maklum Balas Anda Membantu Kami Bertambah Baik. Sila Kongsi Pendapat Anda di Bawah!</p>

            <form id="feedbackForm">
                <div className="form-group">
                    <label htmlFor="name">Nama Anda:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Anda:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="feedback">Your Feedback:</label>
                    <textarea id="feedback" name="feedback" rows="5" placeholder="Write your feedback" required />
                </div>

                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default Feedback;