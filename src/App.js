import logo from "./logo.svg";
import "./App.css";
import lines from "./data.js";
import React, { useState, useEffect } from "react";

const setNewSentence = () => {
  const idx = Math.floor(Math.random() * lines.length);
  console.log(lines[idx]);
  return lines[idx];
};

function App() {
  const [sentence, setSentence] = useState(setNewSentence());
  return (
    <div className="App">
      <div>{sentence}</div>
    </div>
  );
}

export default App;
