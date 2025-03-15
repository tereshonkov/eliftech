import './Select.css';

export default function Select() {
  return (
    <div className='quest__select'>
    <select className='select__item' value="" >
        <option value="text">Text</option>
        <option value="radio">Single Choice</option>
        <option value="checkbox">Multiple Choice</option>
    </select>
    <button className='select__button'>Remove</button>
</div>
  )
}
