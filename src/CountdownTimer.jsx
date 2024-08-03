// src/CountdownTimer.js
import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ targetDate }) => {
  return (
    <div style={{ fontSize: '2rem', textAlign: 'center', marginTop: '20px' }}>
      <Countdown date={targetDate} />
    </div>
  );
};

export default CountdownTimer;
