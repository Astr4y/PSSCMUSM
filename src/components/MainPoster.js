import React, { useEffect, useState } from 'react';

const MainPoster = () => {
  const posters = ["/kasutra.jpg", "/pab.jpg", "/spm.jpg", "/kwd10.jpg", "/kcl.jpg"]; //array for posters
  const [currentPoster, setCurrentPoster] = useState(0); //variable for currentPoster = set to 0, then play the array of posters

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoster((prev) => (prev + 1) % posters.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [posters.length]);

  return (
    <section className="main-poster">
      <a href={`event${currentPoster + 1}.html`}>
        <img src={posters[currentPoster]} alt="Main Event Poster" className="rotating-poster" />
      </a>
    </section>
  );
};

export default MainPoster;
