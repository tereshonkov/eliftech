import './InputQuest.css';

export default function InputQuest({value, handleInputChange, index}) {  
  return (
    <div className='quest__input'>
    <p className='input__header'>Question</p>
    <div className='input__wrapper'>
    <label htmlFor='question'>{index + 1}.</label>
    <input 
    className='wrapper__input' 
    type='text' 
    id='question' 
    value={value}
    onChange={handleInputChange}
    />
    </div>
    </div>
  )
}
