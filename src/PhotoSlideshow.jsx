import React, { useState, useEffect } from 'react';

const PhotoSlideshow = ({ photos, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [photos, interval]);

  return (
    <div className="slideshow-container">
      <img
        src={photos[currentIndex]}
        alt="Birthday Person"
        className="slideshow-image"
      />
    </div>
  );
};

export default PhotoSlideshow;
