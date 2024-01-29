import React, { useState } from "react";
import Number from "../Numbers/Number";
import Styles from "../MainGameInterFace/MainGameInterface.module.css";
import Button from "../Button/Button";

const MainGameInterface = ({ setRules, rules, onclick }) => {
  let [clickedButton, setClickedButton] = useState(null);
  let [score, setScore] = useState(0);
  let [forImage, setForImage] = useState("/Images/dice_1.png");
  const mainGameLogic = () => {
    if (clickedButton === null) {
      alert("Select a Number");
      return;
    }
    setRules(false);
    let randomNumber = Math.floor(
      Math.random() * [1, 2, 3, 4, 5, 6].length + 1
    );

    setForImage(`/Images/dice_${randomNumber}.png`);

    if (clickedButton === randomNumber) {
      setScore((previousVal) => previousVal + clickedButton + randomNumber);
    } else if (clickedButton !== randomNumber) {
      setScore((previousValue) => previousValue - 2);
    }
    setClickedButton(undefined);
  };
  const handleReset = () => {
    setScore(0);
    setRules(false);
    setForImage("/Images/dice_1.png");
  };
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.score_num}>
          <div className="score">
            <h1>{score}</h1>
            <h4>Total Score</h4>
          </div>

          <div className={Styles.forNumbs}>
            <Number
              setClickedButton={setClickedButton}
              clickedButton={clickedButton}
            ></Number>
            <h4>Select Number</h4>
          </div>
        </div>

        <div className={Styles.main_dice}>
          <img src={forImage} alt="" onClick={mainGameLogic} />
          <p>Click On Dice to roll</p>
          <div className="btn">
            <Button
              text="Reset Score"
              background={true}
              onclick={handleReset}
            ></Button>
            <br />
            <Button
              text="Show Rules"
              setRules={setRules}
              rules={rules}
              onclick={onclick}
            ></Button>
            {rules === "show" ? (
              <div className={Styles.text}>
                <h3>How to play dice game</h3>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>
                  after click on dice if selected number is equal to dice number
                  you will get same point as dice{" "}
                </p>
                <p>if you get wrong guess then 2 point will be dedcuted</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainGameInterface;
