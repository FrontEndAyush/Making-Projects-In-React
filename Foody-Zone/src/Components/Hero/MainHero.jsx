import React from "react";
import Styles from "../Hero/MainHero.module.css";
import { Card } from "../Cards/Card";
export const MainHero = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.cardList}>
        <Card heading="BOILED EGGS" img="/Food/1.png"></Card>
        <Card heading="RAMEN" img="/Food/2.png"></Card>
        <Card heading="CHILLED CHICKEN" img="/Food/3.png"></Card>
        <Card heading="CAKE" img="/Food/4.png"></Card>
        <Card heading="BURGER" img="/Food/5.png"></Card>
        <Card heading="PANCAKE" img="/Food/6.png"></Card>
      </div>
    </div>
  );
};
export default MainHero;
