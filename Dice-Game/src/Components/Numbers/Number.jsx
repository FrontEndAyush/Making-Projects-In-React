
import styled from "styled-components";
import React, { useState } from "react";

const Number = ({ setClickedButton, clickedButton }) => {
  let [nums, setNums] = useState([1, 2, 3, 4, 5, 6]);

  const handleClickButton = (num) => {
    setClickedButton(num);
  };


  return (
    <>
      {nums.map((num) => (
        <StyledButton
          isTrue={num === clickedButton}
          onClick={() => handleClickButton(num)}
        >
          {num}
        </StyledButton>
      ))}
    </>
  );
};

const StyledButton = styled.button`
  width: 72px;
  height: 72px;

  font-weight: 500;

  font-size: 24px;
  margin-left: 15px;
  cursor: pointer;

  background-color: ${(props) => (props.isTrue ? "black" : "white")};
  color: ${({ isTrue }) => (isTrue ? "white" : "black")};
`;

export default Number;
