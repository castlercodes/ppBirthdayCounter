import React from 'react';
import './App.css';
import PhotoSlideshow from './PhotoSlideshow';
import CountdownTimer from './CountdownTimer';
import BirthdayAnimation from './BirthdayAnimation';
import photo1 from './assets/pp1.jpg';
import photo2 from './assets/pp2.jpg';
import photo3 from './assets/pp3.jpg';

function App() {
  const photos = [
    photo1,
    photo2,
    photo3,
  ]; // Add paths to your photos here
  const birthdayDate = new Date('2024-08-13T00:00:00'); // Replace with the birthday date

  return (
    <div className="App">
      <header className="App-header">
        <PhotoSlideshow photos={photos} interval={3000} />
        <CountdownTimer targetDate={birthdayDate} />
        <BirthdayAnimation />
      </header>
    </div>
  );
}

export default App;
