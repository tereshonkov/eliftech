import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import ModalEdit from "./components/ModalEdit";
import RunQuiz from "./components/RunQuiz";

function App() {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(null);
  const [menuBool, setMenuBool] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [quizToEdit, setQuizToEdit] = useState(null);
  const [run, setRun] = useState(false);
  const itemOnPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  let allPages = quiz.length / itemOnPage;
  if (quiz.length % itemOnPage !== 0) {
    allPages++;
  }
  let startPages = (currentPage - 1) * itemOnPage;
  let endPasges = startPages + itemOnPage;

  const currentQuiz = quiz.slice(startPages, endPasges);

  console.log(quiz);

  const handleMenu = (id) => {
    setMenu(id);
    setMenuBool((prev) => !prev);
  };

  const handleEdit = (id) => {
    const quizToEdit = quiz.find((el) => el.id === id);
    setQuizToEdit(quizToEdit);
    setModalEdit(true);
  };

  const handleDelite = (id) => {
    setQuiz(prev => prev.filter((el) => el.id !== id))
  }

  return (
    <section className="quiz__wrapper">
      <div className="quiz__header">
        <h1 className="quiz__header">Quiz Catalog</h1>
        <button
          onClick={() => {
            setModal((prev) => !prev);
          }}
          className="form-btn"
        >
          Create Quiz
        </button>
      </div>
      <div className="wrapper">
        {currentQuiz.map((el) => (
          <div key={el.id} className="quiz__items">
            <div className="items__card">
              <div className="quiz-menu">
                <button
                  onClick={() => {
                    handleMenu(el.id);
                  }}
                  className="menu__btn"
                >
                  ⋮
                </button>
                {menu === el.id && menuBool && (
                  <div className="menu__select">
                    <button
                      onClick={() => {
                        handleEdit(el.id);
                      }}
                      className="select__btn"
                    >
                      Edit
                    </button>
                    <button onClick={() => setRun(prev => !prev)} className="select__btn">Run</button>
                    <button onClick={() => {handleDelite(el.id)}} className="select__btn">Delete</button>
                  </div>
                )}
              </div>
              <div className="card__obj">
                <h3 className="obj__name">{el.name}</h3>
                <h4 className="obj__description">{el.description}</h4>
              </div>
              <p className="card__length">questions: {el.questions.length}</p>
            </div>
            {run && <RunQuiz setRun={setRun} array={quiz.find(q => q.id === el.id)} />}
          </div>
        ))}
      </div>
      <div className="btn-pagination">
        {currentPage > 1 && (
          <button className="pagin" onClick={() => setCurrentPage(currentPage - 1)}>prev</button>
        )}
        {currentPage < allPages && (
          <button className="pagin" onClick={() => setCurrentPage(currentPage + 1)}>next</button>
        )}
      </div>
      {modal && <Modal setQuiz={setQuiz} setModal={setModal} />}
      {modalEdit && (
        <ModalEdit
          setModalEdit={setModalEdit}
          setQuiz={setQuiz}
          quizToEdit={quizToEdit}
        />
        
      )}


    </section>
  );
}

export default App;
