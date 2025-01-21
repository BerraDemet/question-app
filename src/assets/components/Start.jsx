import { useState } from "react";
import Question from "./Question";

export default function Start() {
  const [startTest, setStartTest] = useState(false);

  const handleStart = () => {
    setStartTest(true);
  };
  return (
    <div className="container">
      {!startTest ? (
        <>
          <h1>Welcome to QUIZ</h1>
          <ul>
            <li>Bu sınavda 10 soru bulunmaktadır.</li>
            <li>Her soru için 30 saniyeniz vardır.</li>
            <li>Önceki soruya geri dönüş yoktur.</li>
            <li>Sonuçlarınız en sonda görünecektir.</li>
          </ul>
          <button onClick={handleStart}>Start</button>
        </>
      ) : (
        <Question />
      )}
    </div>
  );
}
