import React from 'react';
import { useParams } from 'react-router-dom';
import './RegistrationPage.css';

// Define the event data here as well or import it from a shared data file
const events = {
  event1: {
    title: "Karnival Sukan Tradisional kali ke-11",
    poster: "/kasutra/kasutra.jpg",
    description: "Description for event 1...",
  },
  event2: {
    title: "Pengambilan Ahli Baharu Dan Daftar Kokurikulum",
    poster: "/pab/pab.jpg",
    description: "Description for event 2...",
  },
  event3: {
    title: "Kembara Cekak Lestari",
    poster: "/kcl/kcl.jpg",
    description: "Description for event 3...",
  },
  event4: {
    title: "Sulalatus Peradaban Melayu 2.0",
    poster: "/spm/spm.jpg",
    description: "Description for event 4...",
  },
};

const RegistrationPage = () => {
  const { eventId } = useParams(); // Get eventId from the URL
  const event = events[eventId]; // Retrieve event details based on eventId

  if (!event) {
    return <h2>Event Not Found</h2>; // Error handling if eventId doesn't match
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const registrationData = {
      eventId, // Include eventId
      name: formData.get('name'),
      matricNumber: formData.get('matricNumber'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
    };

    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Registration successful!');
          e.target.reset();
        } else {
          alert('Error during registration!');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="registration-page">
      <div className="header">
        <div className="event-header-container">
          <img
            src={event.poster}
            alt={`${event.title} Poster`}
            className="event-poster"
          />
          <h1 className="event-title">{event.title}</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>NAME</label>
        <input type="text" name="name" placeholder="Enter Name" required />

        <label>MATRIC NUMBER</label>
        <input
          type="text"
          name="matricNumber"
          placeholder="Enter Matric Number"
          required
        />

        <label>EMAIL</label>
        <input type="email" name="email" placeholder="Enter Email" required />

        <label>PHONE NUMBER</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter Phone Number"
          required
        />

        <button type="submit" className="register-btn">
          REGISTER NOW
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
