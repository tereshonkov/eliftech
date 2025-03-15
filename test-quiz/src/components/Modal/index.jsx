import InputQuest from '../InputQuest';
import Radio from '../Radio';
import Select from '../Select';
import './Modal.css'


export default function Modal() {
  return (
    <div className='wrapper__modal'>
        <h1>Create Quiz</h1>
        <form className='modal__form'>
            <div className='wrapper__quest'>
            <div className='modal__quest'>
            <InputQuest />
            <Select />
        </div>
        <Radio />
        <div className='modal__quest'>
        <InputQuest />
        <Select />
        </div>
        <Radio />
            </div>
        <button className='form-btn'>Add question</button>
        </form>
    </div>
  )
}
