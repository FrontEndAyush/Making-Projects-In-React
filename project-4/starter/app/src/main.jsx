import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobleStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body{
    width: 100%;
    height: 100vh;
    background: url("/bgLogo/bg.png");
  background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobleStyle />
    <App />
  </React.StrictMode>
);
