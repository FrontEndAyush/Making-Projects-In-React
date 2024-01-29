import React, { useEffect, useRef, useState } from "react";
import { Search } from "../Search/Search";
import { StyledButton } from "../Button/Button";
import styled from "styled-components";

export const Navbar = ({ setFilterData, data }) => {
  const [isText, setIsText] = useState(null);

  const handleColor = (text) => {
    setIsText(text);
  };
  return (
    <Container className="container">
      <div className="logo-search">
        <img src="/bgLogo/logo.svg" alt="" />
        <Search setFilterData={setFilterData} data={data}></Search>
      </div>
      <div className="tabs">
        {["All", "Breakfast", "Lunch", "Dinner"].map((text) => (
          <StyledButton
            istrue={text === isText}
            onClick={() => handleColor(text)}
          >
            {text}
          </StyledButton>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 243px;
  background-color: #323334;

  .logo-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .tabs {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    gap: 14px;
  }
`;
