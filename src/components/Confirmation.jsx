import React from "react";
import styled from "styled-components";
import ThankYouIMG from "../assets/images/illustration-thank-you.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IMG = styled.img`
  width: 144px;
  heigth: 96px;
  @media (min-width: 600px) {
    margin-top:15px;
    width: 162px;
    heigth: 108px;
  }
`;

const SelectedRating = styled.div`
  background: var(--darkblue);
  border-radius: 22.5px;
  color: var(--orange, #fc7614);
  text-align: center;
  font-size: 14px;
  font-family: Overpass;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-top: 36px;
  width: 193px;
  height: 32px;
  padding: 7px;
  @media (min-width: 600px) {
    font-size:15px;
  }
`;
const Greet = styled.h1`
  color: var(--purewhite);
  font-size: 24px;
  font-family: Overpass;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 29px;
  @media (min-width: 600px) {
    font-size:28px;
  }
`;
const Content = styled.p`
  margin: 0 0 37px 0;
  text-align: center;
  font-size: 14px;
  font-family: Overpass;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: var(--lightgrey);
  @media (min-width: 600px) {
    font-size:15px;
    line-height: 24px;
  }
`;

function Confirmation({ ratingNumber }) {
  return (
    <Container>
      <IMG src={ThankYouIMG} alt="thankyou-image" />
      <SelectedRating>You selected {ratingNumber} out of 5</SelectedRating>
      <Greet>Thank you!</Greet>
      <Content>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </Content>
    </Container>
  );
}

export default Confirmation;
