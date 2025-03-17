import "./RunQuiz.css";
import { useState, useEffect } from "react";

export default function RunQuiz({ setRun, array }) {
  const [answersObj, setAnswersObj] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    stopTimer();
    setIsSubmit(true);
    console.log(answersObj);
  };

  const handleUpdate = (indexQ, indexA, value) => {
    const updatedAnswers = [...answersObj];
    if (!updatedAnswers[indexQ]) {
      updatedAnswers[indexQ] = { question: array.questions[indexQ].text, answers: [] };
    }
    updatedAnswers[indexQ].answers[indexA] = value;
    setAnswersObj(updatedAnswers);
  };

  const [totalTime, setTotalTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTotalTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning]);

  const stopTimer = () => {
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  if (!array || !array.questions) {
    return <div>Loading...</div>; // Покажет индикатор загрузки
  }

  return (
    <form onSubmit={handleSubmit} className="wrapper__quiz">
      <div className="header">
        <h1>Quiz</h1>
        <span>Time: {formatTime(totalTime)}</span>
        <div onClick={() => setRun(false)} className="close-btn1">
          <span className="item-btn1"></span>
          <span className="item-btn21"></span>
        </div>
      </div>

      {array.questions.map((el, indexQ) => (
        <div key={indexQ} className="quiz__items">
          <h3>{`${indexQ + 1}. ${el.text}`}?</h3>
          <div className="answers">
            {el.answers.map((el1, indexA) => (
              <div key={indexA} className="answer">
                {el.type === "text" && (
                  <div className="wrapper_for-quest">
                    <label htmlFor={`text-${indexQ}-${indexA}`}>{el1}</label>
                    <input
                      className="wrapper__input"
                      type="text"
                      id={`text-${indexQ}-${indexA}`}
                      value={answersObj[indexQ] && answersObj[indexQ].answers[indexA] || ""}
                      onChange={(e) => handleUpdate(indexQ, indexA, e.target.value)}
                    />
                  </div>
                )}

                {el.type === "radio" && (
                  <div className="wrapper_for-quest">
                    <label htmlFor={`radio-${indexQ}-${indexA}`}>{el1}</label>
                    <input
                      className="input1"
                      name={`radio-${indexQ}`}
                      type="radio"
                      id={`radio-${indexQ}-${indexA}`}
                      value={el1}
                      checked={answersObj[indexQ] && answersObj[indexQ].answers[indexA] === el1}
                      onChange={(e) => handleUpdate(indexQ, indexA, el1)}
                    />
                  </div>
                )}

                {el.type === "checkbox" && (
                  <div className="wrapper_for-quest">
                    <label htmlFor={`checkbox-${indexQ}-${indexA}`}>{el1}</label>
                    <input
                      className="input1"
                      type="checkbox"
                      id={`checkbox-${indexQ}-${indexA}`}
                      checked={answersObj[indexQ] && answersObj[indexQ].answers[indexA] === el1}
                      onChange={(e) => handleUpdate(indexQ, indexA, e.target.checked ? el1 : "")}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="submit">Submit</button>
      {isSubmit && <div>
        <h2>Your answer:</h2>
        {answersObj.map((el, index) => (
            <div key={index}>
                <h3>{el.question}</h3>
                <ul>
                {el.answers.map((el1, index1) => (
                    <li key={index1}>{el1}</li>
                ))}
                </ul>
            </div>
        ))}
        <h3>your time is: {totalTime}</h3>
      </div>}
    </form>
  );
}
