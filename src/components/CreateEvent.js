import React, { useState } from 'react';

const CreateEvent = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert('Title is required.');
      return;
    }

    const newEvent = {
      src: image ? URL.createObjectURL(image) : '/default-poster.jpeg', // Default image
      title: title,
      description: description,
      page: `/event-${title.replace(/\s+/g, '-').toLowerCase()}`,
    };

    addEvent(newEvent); // Update events in the parent component
    alert('Event created successfully!');
    setTitle('');
    setImage(null);
    setDescription('');
  };

  return (
    <section className="create-event-container">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Poster (optional):
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide a brief description of the event"
          />
        </label>
        <button type="submit">Create Event</button>
      </form>
    </section>
  );
};

export default CreateEvent;
