import "./question.css";
import questions from "../data";
import React, { useState, useRef } from "react";

export default function Question() {
  // USE STATES
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questions[index]);
  const [lock, setLock] = useState(false);

  // USE REF
  const optionsRef = useRef([]);

  //   CHECK ANSWER
  const checkAnswer = (e, answer) => {
    if (lock === false) {
      if (question.answer === answer) {
        e.target.classList.add("correct");
        setLock(true);
      } else {
        e.target.classList.add("wrong");

        optionsRef.current.forEach((option, index) => {
          if (question.answer === question.options[index]) {
            option.classList.add("correct");
          }
        });
        setLock(true);
      }
    }
  };

  //   NEXT BUTTON
  function handleNext() {
    if (lock === true) {
      setIndex((prevIndex) => prevIndex + 1);
      setQuestion(questions[index + 1]);

      optionsRef.current.forEach((option) => {
        option.classList.remove("correct");
        option.classList.remove("wrong");
      });

      setLock(false);
    }
  }

  return (
    <div className="container">
      <img src={question.media} alt="question visual" />
      <p className="question">{question.question}</p>
      {/* OPTIONS */}
      <ul className="options">
        {question.options.map((option, index) => (
          <li
            key={index}
            ref={(e) => (optionsRef.current[index] = e)}
            onClick={(e) => checkAnswer(e, option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {/* BUTTON */}
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
