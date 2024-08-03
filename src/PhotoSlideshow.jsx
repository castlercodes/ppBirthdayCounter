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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', width: '80%' }}>
      <img
        src={photos[currentIndex]}
        alt="Birthday Person"
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '15px' }}
      />
    </div>
  );
};

export default PhotoSlideshow;
