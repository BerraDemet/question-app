import "./question.css";
import questions from "../data";
import React, { useState, useEffect, useRef } from "react";
import Finish from "./Finish";

export default function Question() {
  // USE STATES
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questions[index]);
  const [lock, setLock] = useState(false);
  const [time, setTime] = useState(30);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const optionsRef = useRef([]);

  // CHECK ANSWER
  const checkAnswer = (e, answer) => {
    if (!lock) {
      if (question.answer === answer) {
        e.target.classList.add("correct");
        setScore((prevScore) => prevScore + 1);
      } else {
        e.target.classList.add("wrong");
        optionsRef.current.forEach((option, index) => {
          if (question.answer === question.options[index]) {
            option.classList.add("correct");
          }
        });
      }

      // Kullanıcı cevabını kaydet
      setUserAnswers((prevAnswers) => {
        const newAnswers = [...prevAnswers];
        newAnswers[index] = answer; // Sorunun sırasına göre cevabı kaydet
        return newAnswers;
      });

      setLock(true);
    }
  };
  //   NEXT BUTTON

  const handleNext = () => {
    if (lock || time === 0) {
      if (index + 1 >= questions.length) {
        setFinish(true); // Quiz bitiş ekranına geç
      } else {
        setIndex((prevIndex) => prevIndex + 1);
        setQuestion(questions[index + 1]);
        optionsRef.current.forEach((option) => {
          option.classList.remove("correct");
          option.classList.remove("wrong");
        });
        setLock(false);
        setTime(30);
      }
    }
  };

  // TIME
  useEffect(() => {
    if (finish) return;

    if (time === 0) {
      handleNext();
    } else {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 200);

      return () => clearInterval(timer);
    }
  }, [time, finish]);

  return (
    <div className="container">
      {finish ? (
        <Finish score={score} questions={questions} userAnswers={userAnswers} />
      ) : (
        <>
          <img src={question.media} alt="question visual" />
          <p className="question">{question.question}</p>
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
          <button onClick={handleNext}>Next</button>
          <p className="timer">{time}</p>
        </>
      )}
    </div>
  );
}
