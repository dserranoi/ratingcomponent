import React from 'react';
import "./App.css";
import Rating from "./components/Rating";
import Confirmation from './components/Confirmation';
import styled from "styled-components";

const RatingContainer = styled.div`
  width: 327px;
  height: 360px;
  border-radius: 15px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  padding: 24px;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    height: 416px;
    width: 412px;
  }
`;

function App() {
  const [view, setView] = React.useState('rating');
  const [ratingNumber, setRatingNumber] = React.useState(0);
  return (
    <div className="app">
      <RatingContainer>
        {view === 'rating' ? <Rating setView={setView} ratingNumber={ratingNumber} setRatingNumber={setRatingNumber} /> : <Confirmation ratingNumber={ratingNumber} /> }
      </RatingContainer>
    </div>
  );
}

export default App;
