import './Radio.css';

export default function Radio({setAnswer, answers}) {
  const handleChange = (e, index) => {
    const newAnswer = e.target.value;
    const updatedAnswers = [...answers];
    updatedAnswers[index] = newAnswer;
    setAnswer(updatedAnswers);
  };
  const handleClearAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = ''; 
    setAnswer(updatedAnswers);
  };

  return (
    <div className="quest__answers">
      <h3>Answers</h3>
              <div className="answers__input">
              <div className='input__wrapper'>
              <label htmlFor="question">1</label>
              <input 
              className='input' 
              type="text" 
              id="question" 
              name="question1" 
              value={answers[0] || ''}
              onChange={(e) => handleChange(e, 0)}
              />
              </div>
              <button type='button' onClick={() => {handleClearAnswer(0)}} className="select__button">Remove</button>
            </div>
            <div className="answers__input">
              <div className='input__wrapper'>
              <label htmlFor="question">2</label>
              <input 
              className='input' 
              type="text" 
              id="question" 
              name="question1" 
              value={answers[1] || ''}
              onChange={(e) => handleChange(e, 1)}
              />
              </div>
              <button type='button' onClick={() => handleClearAnswer(1)}  className="select__button">Remove</button>
            </div>
    </div>
  );
}
