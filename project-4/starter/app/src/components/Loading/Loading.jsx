import React from "react";
import styled from "styled-components";

export const Loading = () => {
  return <LoadingText>Loading....</LoadingText>;
};

const LoadingText = styled.div`
  font-size: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
