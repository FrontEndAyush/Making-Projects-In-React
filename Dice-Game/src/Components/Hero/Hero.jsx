import React, { useState } from "react";
import Styles from "../Hero/Hero.module.css";
import Button from "../Button/Button";

const Hero = ({ isTrue, setIsTrue, onclick }) => {
  return (
    <div className={Styles.container}>
      <div className="forimg">
        <img src="/Images/Dices.png" alt="Dices" />
      </div>
      <div className="fortext">
        <h1>DICE GAME</h1>
        <div className={Styles.btn_cont}>
          <Button
            text="Play Now"
            isTrue={isTrue}
            setIsTrue={setIsTrue}
            onclick = {onclick}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
