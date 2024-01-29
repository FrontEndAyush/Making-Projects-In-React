import React from "react";
import styled from "styled-components";
import { Card } from "./Card";
export const Cards = ({ data }) => {
  return (
    <Container>
      {data.map((food) => (
        <Card
       
          img={food.image}
          price={food.price}
          text={food.text}
          name={food.name}
          type={food.type}
        ></Card>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 1060px;
  flex-wrap: wrap;
  margin: auto;
  column-gap: 20px;
`;
