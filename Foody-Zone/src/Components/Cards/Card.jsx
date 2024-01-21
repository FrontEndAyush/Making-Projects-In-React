import React from "react";
import Styles from "../Cards/Card.module.css";
import Button from "../Button/Button";

export const Card = ({heading, img}) => {
  return (
    <div className={Styles.card}>
      <div className="card_img">
        <img src={img} alt="" />
      </div>
      <div className="card_text">
        <h5>{heading}</h5>
        <p>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. </p>
     <Button></Button>
      </div>
    </div>
  );
};
