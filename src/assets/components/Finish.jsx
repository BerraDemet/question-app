import React from "react";
import "./finish.css";

export default function Finish({ score, questions, userAnswers }) {
  return (
    <div className="finish-container">
      <div className="heading-wrapper">
        <h1>End Of The Quiz</h1>
        <p>Your score: {score}</p>
      </div>
      <ul className="scores">
        {questions.map((question, index) => (
          <li className="scores-part" key={index}>
            <p className="part-item">Question {index + 1}:</p>
            <p className="part-item">Correct Answer: {question.answer}</p>
            <p className="part-item">
              Your Answer: {userAnswers[index] || "No answer"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
