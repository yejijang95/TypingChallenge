import logo from "./logo.svg";
import "./App.css";
import LINES from "./data.js";
import React, { useState, useEffect } from "react";

const setNewSentence = () => {
  const idx = Math.floor(Math.random() * LINES.length);
  console.log(LINES[idx]);
  return LINES[idx];
};

function App() {
  const [sentence, setSentence] = useState(setNewSentence());
  return (
    <div className="App">
      <div>{sentence}</div>
      <textarea />
    </div>
  );
}
/*
TIMER TO SEE WHERE THEY ARE
HIGHLIGHTER OR FONT COLOR CHANGE TO SHOW WHICH POSITION THEY ARE IN
CACULATE THE TYPING SPEED
STYLING AT END
*/

export default App;
