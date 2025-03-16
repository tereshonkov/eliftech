import './Select.css';

export default function Select({ value, setValue }) {
  return (
    <div className='quest__select'>
    <select value={value} onChange={(e) => setValue(e.target.value)} className='select__item'>
        <option value="text">Text</option>
        <option value="radio">Single Choice</option>
        <option value="checkbox">Multiple Choice</option>
    </select>
    <button className='select__button'>Remove</button>
</div>
  )
}
