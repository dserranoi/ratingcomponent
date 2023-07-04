import React from "react";
import Logo from "../assets/images/icon-star.svg";
import styled from "styled-components";

const TitleRating = styled.h1`
  color: var(--purewhite);
  font-size: 24px;
  font-family: Overpass;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 16px;
  margin-bottom: 10px;
  @media (min-width: 600px) {
    font-size: 28px;
  }
`;

const ContentRating = styled.p`
  color: var(--lightgrey);
  font-size: 14px;
  font-family: Overpass;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  width: 100%;
  @media (min-width: 600px) {
    font-size: 15px;
  }
`;

const IMGContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--darkblue);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const RatingButtonContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-top: 10px;
  & button:hover {
    background: var(--orange);
    color: var(--purewhite);
    cursor: pointer;
  }
  & button:nth-child(even) {
    margin: 0px 10px;
    @media (min-width: 600px) {
        margin: 0px 21px;
    }
  }
`;

const RatingButton = styled.button`
  background: ${(props) =>
    props.ratingNumber == props.number
      ? "var(--mediumgray)"
      : "var(--darkblue)"};
  border: 0px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 14px;
  color: ${(props) =>
    props.ratingNumber == props.number
      ? "var(--purewhite)"
      : "var(--mediumgray)"};

  @media (min-width: 600px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  border-radius: 22.5px;
  background: var(--orange);
  color: var(--purewhite);
  padding: 14px;
  border: 0px;
  font-size: 14px;
  font-family: Overpass;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.867px;
  text-transform: uppercase;
  margin-bottom: 32px;
  &:hover {
    cursor: pointer;
    background: var(--purewhite);
    color: var(--orange);
  }
  @media (min-width: 600px) {
    font-size: 15px;
  }
  
`;

function Rating({ setView, ratingNumber, setRatingNumber }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ratingNumber > 0) {
      setView("confirmation");
    }
  };
  const handleRating = (value) => {
    setRatingNumber(value);
  };
  return (
    <>
      <IMGContainer>
        <img src={Logo} alt="logo" />
      </IMGContainer>
      <TitleRating>How did we do?</TitleRating>
      <ContentRating>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </ContentRating>
      <RatingButtonContainer>
        {[...Array(5).keys()].map((value) => (
          <RatingButton
            ratingNumber={ratingNumber}
            number={value + 1}
            key={value}
            onClick={() => {
              handleRating(value + 1);
            }}
            type="button"
          >
            {value + 1}
          </RatingButton>
        ))}
      </RatingButtonContainer>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}

export default Rating;
