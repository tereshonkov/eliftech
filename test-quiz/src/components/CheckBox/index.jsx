import React from 'react'

export default function Checbox({ answers, setAnswers}) {
  const handleAnswerChange = (e, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = e.target.value;
    setAnswers(updatedAnswers);
  };
  const handleClearAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = ''; 
    setAnswers(updatedAnswers);
  };
  return (
    <div className="quest__answers">
      <h3>Answers</h3>
        <div  className="answers__input">
          <div className="input__wrapper">
            <label>1. </label>
            <input
              className="input"
              type="text"
              value={answers[0] || ''}
              onChange={(e) => handleAnswerChange(e, 0)}
            />
          </div>
          <button type='button' onClick={() => {handleClearAnswer(0)}} className="select__button">Remove</button>
        </div>
        <div  className="answers__input">
          <div className="input__wrapper">
            <label>2. </label>
            <input
              className="input"
              type="text"
              value={answers[1] || ''}
              onChange={(e) => handleAnswerChange(e, 1)}
            />
          </div>
          <button type='button' onClick={() => {handleClearAnswer(1)}} className="select__button">Remove</button>
        </div>
        <div  className="answers__input">
          <div className="input__wrapper">
            <label>3. </label>
            <input
              className="input"
              type="text"
              value={answers[2] || ''}
              onChange={(e) => handleAnswerChange(e, 2)}
            />
          </div>
          <button type='button' onClick={() => {handleClearAnswer(2)}} className="select__button">Remove</button>
        </div>
        <div  className="answers__input">
          <div className="input__wrapper">
            <label>4. </label>
            <input
              className="input"
              type="text"
              value={answers[3] || ''}
              onChange={(e) => handleAnswerChange(e, 3)}
            />
          </div>
          <button type='button' onClick={() => {handleClearAnswer(3)}} className="select__button">Remove</button>
        </div>
    </div>
  );
}
