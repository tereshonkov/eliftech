import './InputQuest.css';

export default function InputQuest() {
  return (
    <div className='quest__input'>
    <p className='input__header'>Question</p>
    <div className='input__wrapper'>
    <label htmlFor='question'>1. </label>
    <input className='wrapper__input' type='text' id='question' name='question' />
    </div>
    </div>
  )
}
