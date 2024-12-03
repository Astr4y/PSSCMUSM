import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import InfoSection from './components/InfoSection';
import MainPoster from './components/MainPoster';
import EventButtons from './components/EventButtons';
import Footer from './components/Footer';
import Events from './components/Events'; // Import the Events component
import CreateEvent from './components/CreateEvent'; // Import CreateEvent component
import EventDetail from './components/EventDetail'; // Import the EventDetail component
import RegistrationPage from './components/RegistrationPage'; // Import RegistrationPage component
import Login from './components/Login';
import Register from './components/Register';
import Feedback from './components/Feedback';
import './styles.css';

const App = () => {
  // Initialize `events` state with default values
  const [events, setEvents] = useState([
    { src: "/kasutra.jpg", title: "KaSuTra-11", page: "/event1" },
    { src: "/pab.jpg", title: "PAB Sidang 24/25", page: "/event2" },
    { src: "/kcl.jpg", title: "KCL 2024", page: "/event3" },
    { src: "/spm.jpg", title: "SPM 2.0", page: "/event4" },
  ]);

  // Function to add a new event
  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <InfoSection />
                <MainPoster />
                <EventButtons />
                <Events events={events} />
              </>
            }
          />
          <Route path="/events" element={<Events events={events} />} /> {/* Pass `events` prop */}
          <Route path="/create-event" element={<CreateEvent addEvent={addEvent} />} />
          <Route path="/event1" element={<EventDetail eventId="event1" />} />
          <Route path="/event2" element={<EventDetail eventId="event2" />} />
          <Route path="/event3" element={<EventDetail eventId="event3" />} />
          <Route path="/event4" element={<EventDetail eventId="event4" />} />
          <Route path="/register/:eventId" element={<RegistrationPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
