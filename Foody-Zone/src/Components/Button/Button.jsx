import React from "react";
import Styles from "../Button/Button.module.css";

const Button = () => {
  return (
  <div className={Styles.btn_cont}>
    <button className={Styles.btn}>$ 10.00</button>
    </div>
  )
};

export default Button;
