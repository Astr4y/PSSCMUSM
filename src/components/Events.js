import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Events = ({ events = [] }) => {
  return (
    <section className="events-container">
      <h2>Featured Events</h2>
      <div className="events-row">
        {events.length > 0 ? (
          events.map((event, index) => (
            <NavLink to={event.page} key={index} className="event-card">
              <img src={event.src} alt={event.title} className="event-poster" />
              <p className="event-title">{event.title}</p>
            </NavLink>
          ))
        ) : (
          <p>No events available. Create one!</p>
        )}
      </div>
      {/* "+" button for creating new events */}
      <NavLink to="/create-event" className="add-event-button">
        +
      </NavLink>
    </section>
  );
};

export default Events;
