import React from 'react';
import { useParams } from 'react-router-dom';

const Registration = () => {
  const { eventId } = useParams(); // Get the eventId from the URL

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic
    console.log('Form submitted for:', eventId);
  };

  return (
    <div>
      <h1>Register for Event: {eventId}</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Matric Number:
          <input type="text" name="matricNumber" required />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
