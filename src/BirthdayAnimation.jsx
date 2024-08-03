// src/BirthdayAnimation.js
import React from 'react';
import Confetti from 'react-confetti';
import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn } from 'react-animations';

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;

const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`} infinite;
`;

const BirthdayAnimation = () => {
  return (
    <div>
      <Confetti />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Bounce>
          <h1>Happy Birthday PP!</h1>
        </Bounce>
        <FadeIn>
          <p>Wishing you a fantastic day filled with joy and surprises!</p>
        </FadeIn>
      </div>
    </div>
  );
};

export default BirthdayAnimation;
