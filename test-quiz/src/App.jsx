import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [modal, setModal] = useState(false)
  const [menu, setMenu] = useState(false)


  return (
    <section className='quiz__wrapper'>
      <div className='quiz__header'>
      <h1 className='quiz__header'>Quiz Catalog</h1>
      <button onClick={() => {setModal(prev => !prev)}} className='form-btn'>Create Quiz</button>
      </div>
      <div className='quiz__items'>
        <div className='items__card'>
        <div className='quiz-menu'>
          <button onClick={() => setMenu(prev => !prev)} className='menu__btn'>
          ⋮
          </button>
          {menu && <div className='menu__select'>
            <button onClick={() => {setModal(prev => !prev)}} className='select__btn'>Edit</button>
            <button className='select__btn'>Run</button>
            <button className='select__btn'>Delete</button>
          </div>}
        </div>
            <div className='card__obj'>
            <h3 className='obj__name'>QUIZ NAME</h3>
            <h4 className='obj__description'>Quiz description</h4>
            </div>
            <p className='card__length'>questions: 1</p>
        </div>
      </div>
      {modal && <Modal setModal={setModal} />}
    </section>
  )
}

export default App
