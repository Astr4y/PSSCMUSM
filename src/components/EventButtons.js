import React from 'react';
import { Link } from 'react-router-dom';

const EventButtons = () => {
  const events = [
    { src: "/kasutra.jpg", title: "KaSuTra-11", page: "/event1" },
    { src: "/pab.jpg", title: "PAB Sidang 24/25", page: "/event2" },
    { src: "/kcl.jpg", title: "KCL 2024", page: "/event3" },
    { src: "/spm.jpg", title: "SPM 2.0", page: "/event4" },
    //{ src: "/kwd10.jpg", title: "KWD 10", page: "/event5" },
  ];

  const chunkEvents = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const eventRows = chunkEvents(events, 3);

  return (
    <section className="event-buttons">
      {eventRows.map((row, rowIndex) => (
        <div className="event-row" key={rowIndex}>
          {row.map((event, index) => (
            <div className="event-button" key={index}>
              <Link to={event.page}>
                <img
                  src={event.src}
                  alt={event.title}
                  className="small-poster"
                />
                <p>{event.title}</p>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default EventButtons;
