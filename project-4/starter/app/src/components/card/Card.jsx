import React from "react";
import styled from "styled-components";
import { StyledButton } from "../Button/Button";

export const Card = ({ img, price, text, name, type }) => {
  return (
    <>
      <Container>
        <div className="img">
          <img src={"http://localhost:9000" + img} alt="" />
        </div>
        <div className="text">
          <h1>{name}</h1>
          <p>{text}</p>
          <div className="btn">
            <StyledButton>${price.toFixed(2)}</StyledButton>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  max-width: 340px;
  height: 167px;
  background-color: red;
  display: flex;
  background-color: #72393905;
  border-radius: 12px;
  border-top-left-radius: 12px;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  color: white;
  /* align-items: center; */
  backdrop-filter: blur(12px);

  border: 1px solid #3e3833;

  margin: 20px auto;

  h1 {
    font-size: 15px;
    font-family: "Inter", sans-serif;
    padding: 5px 0px;
  }
  p {
    padding: 5px 0px;
    font-family: "Inter", sans-serif;
  }
  .btn {
    display: flex;
    justify-content: end;
    padding-right: 15px;
    padding-top: 5px;
  }
`;
