import React from "react";
import "./finish.css";

export default function Finish({ score, questions, userAnswers }) {
  return (
    <>
      <div className="heading-wrapper">
        <h1>End Of The Quiz</h1>
        <p className="score-item">
          Score <span>{score}</span>
        </p>
      </div>
      <ul className="scores">
        {questions.map((question, index) => {
          const isCorrect = userAnswers[index] === question.answer;

          return (
            <li
              className={`scores-part ${isCorrect ? "correct" : "wrong"}`}
              key={index}
            >
              <p className="part-item">{index + 1}</p>
              <div className="line"></div>
              <p className="part-item">
                Your Answer: {userAnswers[index] || "Empty"}
              </p>
              <p className="part-item">
                <span className="correct-answer">Correct Answer:</span>{" "}
                {question.answer}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
