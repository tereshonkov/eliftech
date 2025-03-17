import "./RunQuiz.css";
import { useState, useEffect } from "react";

export default function RunQuiz({ setRun, array }) {
  // console.log(array);

  const [totalTime, setTotalTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [totalTime]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  if (!array || !array.questions) {
    return <div>Loading...</div>; // Покажет индикатор загрузки
  }
  return (
    <div className="wrapper__quiz">
      <div className="header">
        <h1>Quiz</h1>
        <span>Time: {formatTime(totalTime)}</span>
        <div onClick={() => setRun(false)} className="close-btn1">
          <span className="item-btn1"></span>
          <span className="item-btn21"></span>
        </div>
      </div>
      {array?.questions?.map((el, index) => (
        <div key={index} className="quiz__items">
          <h3>{`${index + 1}. ${el.text}`}?</h3>
          <div className="answers">
            {el.answers.map((el1, index) => (
              <div key={index} className="answer">
                {el.type === "text" && (
                  <div className="wrapper_for-quest">
                    <label htmlFor="text">{el1}</label>
                    <input className='wrapper__input'  type="text" id="text" />
                  </div>
                )}
                {el.type === "radio" && (
                  <div className="wrapper_for-quest">
                    <label htmlFor="radio">{el1}</label>
                    <input className='input1'  type="radio" id="radio" />
                  </div>
                )}
                {el.type === "checkbox" && (
                  <div className="wrapper_for-quest">
                    <label htmlFor="checkbox">{el1}</label>
                    <input className='input1'  type="checkbox" id="checkbox" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
