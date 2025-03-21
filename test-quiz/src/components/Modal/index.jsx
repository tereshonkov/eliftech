import Checbox from "../CheckBox";
import InputQuest from "../InputQuest";
import Radio from "../Radio";
import Select from "../Select";
import "./Modal.css";
import { useState, useEffect } from "react";

export default function Modal({ setModal, setQuiz }) {
  const [quest, setQuest] = useState({
    name: "",
    description: "",
    id: Date.now(),
    questions: []
  });

  const [question, setQuestion] = useState([]);

  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(question));
  }, [question])

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      text: "",
      type: "text",
      answers: [""],
    };
    setQuestion((prev) => [...prev, newQuestion]);
  };

  const updateQuestionText = (id, value) => {
    setQuestion((prev) =>
      prev.map((el) => (el.id === id ? { ...el, text: value } : el))
    );
  };

  const updateQuestionType = (id, typeNew) => {
    setQuestion((prev) =>
      prev.map((el) => (el.id === id ? { ...el, type: typeNew || "text" } : el))
    );
  };

  const updateAnswers = (id, answersNew) => {
    setQuestion((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, answers: [...answersNew] } : el
      )
    );
  };
  const handleRemoveQuestion = (id) => {
    setQuestion((prev) => prev.filter((el) => el.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const updatedQuest = { 
      ...quest, 
      questions: [...quest.questions, ...question] 
    };
    setQuiz((prev) => [...prev, updatedQuest]);
    setModal(false);
  };
  // console.log(quest);

  return (
    <div className="wrapper__modal">
      <div className="modal__header">
        <h1>Create Quiz</h1>
        <div onClick={() => setModal(false)} className="close-btn">
          <span className="item-btn"></span>
          <span className="item-btn2"></span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="modal__form">
        <div className="wrapper__quest">
          <div className="quest__name">
            <input
              value={quest.name}
              onChange={(e) =>
                setQuest((prev) => ({ ...prev, name: e.target.value }))
              }
              className="wrapper__input"
              id="name"
              type="text"
              placeholder="Quiz Name"
            />
            <textarea
              value={quest.description}
              onChange={(e) => {
                setQuest((prev) => ({
                  ...prev,
                  description: e.target.value,
                }));
              }}
              className="name__description"
              type="text"
              id="description"
              placeholder="Quiz Description"
            />
          </div>

          {question.map((el, index) => (
            <div key={el.id} className="modal__quest">
              <div className="quest-box">
                <InputQuest
                  value={el.text}
                  index={index}
                  handleInputChange={(e) =>
                    updateQuestionText(el.id, e.target.value)
                  }
                />
                <Select
                  value={el.type || "text"}
                  setValue={(value) => updateQuestionType(el.id, value)}
                  remove={() => handleRemoveQuestion(el.id)}
                />
              </div>
              {el.type === "radio" && (
                <Radio
                  answers={el.answers}
                  remove={() => handleRemoveQuestion(el.id)}
                  setAnswer={(updatedAnswers) =>
                    updateAnswers(el.id, updatedAnswers)
                  }
                />
              )}
              {el.type === "checkbox" && (
                <Checbox
                  answers={el.answers}
                  setAnswers={(updatedAnswers) => {
                    // Обновляем ответы только для конкретного вопроса
                    updateAnswers(el.id, updatedAnswers); // вызываем updateAnswers, а не setAnswers
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <button type="button" onClick={addQuestion} className="form-btn">
          Add question
        </button>
        <button onSubmit={handleSubmit} className="submit">Submit</button>
      </form>
    </div>
  );
}
