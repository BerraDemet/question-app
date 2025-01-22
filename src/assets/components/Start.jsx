import { useState } from "react";
import Question from "./Question";
import "./start.css";

export default function Start() {
  const [startTest, setStartTest] = useState(false);

  const handleStart = () => {
    setStartTest(true);
  };
  return (
    <div className="start-container">
      {!startTest ? (
        <>
          <img className="logo-img" src="img/quiz.png"></img>
          <h1 className="header"> QUIZ TIME</h1>
          <ul className="instructions">
            <li>There are 10 questions in this exam.</li>
            <li>You have 30 seconds for each question.</li>
            <li>You cannot go back to the previous question.</li>
            <li>Your results will be displayed at the end.</li>
          </ul>
          <button className="start-button" onClick={handleStart}>
            Start
          </button>
        </>
      ) : (
        <Question />
      )}
    </div>
  );
}
