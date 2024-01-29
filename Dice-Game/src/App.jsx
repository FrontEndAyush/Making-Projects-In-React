import { useState } from "react";

import "./App.css";
import Hero from "./Components/Hero/Hero";
import MainGameInterface from "./Components/MainGameInterFace/MainGameInterface";
function App() {
  let [isTrue, setIsTrue] = useState(false);
  let [rules, setRules] = useState("hide");

  const handleRules = () => {
    setRules((previousValue) => (previousValue === "show" ? "hide" : "show"));
  };
  const forPlayNowHandle = () => {
    setIsTrue(!isTrue);
  };
  return (
    <>
      {isTrue === true ? (
        <MainGameInterface
          setRules={setRules}
          rules={rules}
          onclick={handleRules}
        ></MainGameInterface>
      ) : (
        <Hero
          isTrue={isTrue}
          setIsTrue={setIsTrue}
          onclick={forPlayNowHandle}
          rules
        />
      )}
    </>
  );
}

export default App;
