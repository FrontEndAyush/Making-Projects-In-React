import React from "react";
import Styles from "../Button/Button.module.css";

const Button = ({ text, background, onclick }) => {
  return (
    <button
      className={`${Styles.btn} ${background && Styles.bg}`}
      onClick={onclick}
    >
      {text}
    </button>
  );
};
export default Button;
