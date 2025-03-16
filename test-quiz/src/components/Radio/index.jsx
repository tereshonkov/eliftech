import './Radio.css';

export default function Radio() {
  return (
    <div className="quest__answers">
      <h3>Answers</h3>
      <div className="answers__input">
        <div className='input__wrapper'>
        <label htmlFor="question">1.</label>
        <input className='input' type="text" id="question" name="question1" />
        </div>
        <button className="select__button">Remove</button>
      </div>
      <div className="answers__input">
        <div className='input__wrapper'>
        <label htmlFor="question">2.</label>
        <input className='input' type="text" id="question" name="question2" />
        </div>
        <button className="select__button">Remove</button>
      </div>
    </div>
  );
}
