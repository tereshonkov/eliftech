import './Select.css';

export default function Select({ value, setValue, remove }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue !== undefined ? newValue : 'text'); // Убедитесь, что newValue не undefined
  };
  return (
    <div className='quest__select'>
    <select value={value || 'text'} onChange={handleChange} className='select__item'>
        <option value="text">Text</option>
        <option value="radio">Single Choice</option>
        <option value="checkbox">Multiple Choice</option>
    </select>
    <button onClick={remove} className='select__button'>Remove</button>
</div>
  )
}
