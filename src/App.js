import React from "react";
import "./App.css";
import Buttons from "./componets/buttons/Buttons";

const App = () => {
  return (
    <div className="App">
      <div className="top">4:43</div>
      <div className="display">0</div>
      <div className="buttons">
        <Buttons content="AC" />
        <Buttons content="±" />
        <Buttons content="%" />
        <Buttons content="÷" />
        <Buttons content="7" />
        <Buttons content="8" />
        <Buttons content="9" />
      </div>
      <div className="bottom">-</div>
    </div>
  );
};

export default App;
