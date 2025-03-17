import Checbox from "../CheckBox";
import InputQuest from "../InputQuest";
import Radio from "../Radio";
import Select from "../Select";
import "../Modal";
import { useEffect, useState } from "react";

export default function ModalEdit({ setModalEdit, setQuiz, quizToEdit }) {

    const [quest, setQuest] = useState({
        ...quizToEdit, 
        questions: [...quizToEdit.questions], 
      });

      useEffect(() => {
        setQuest({
          ...quizToEdit,
          questions: [...quizToEdit.questions],
        }); 
      }, [quizToEdit]);

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      text: "",
      type: "text",
      answers: [""],
    };
    setQuest((prev) => ({
      ...prev,
      questions: [...prev.questions, newQuestion], 
    }));
  };

  const updateQuestionText = (id, value) => {
  setQuest((prev) => ({
    ...prev,
    questions: prev.questions.map((el) =>
      el.id === id ? { ...el, text: value } : el
    ),
  }));
};

const updateQuestionType = (id, typeNew) => {
    setQuest((prev) => ({
      ...prev,
      questions: prev.questions.map((el) =>
        el.id === id ? { ...el, type: typeNew || "text" } : el
      ),
    }));
  };

  const updateAnswers = (id, answersNew) => {
    setQuest((prev) => ({
      ...prev,
      questions: prev.questions.map((el) =>
        el.id === id ? { ...el, answers: [...answersNew] } : el
      ),
    }));
  };

  const handleRemoveQuestion = (id) => {
  setQuest((prev) => ({
    ...prev,
    questions: prev.questions.filter((el) => el.id !== id),
  }));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuiz((prev) =>
      prev.map((el) =>
        el.id === quest.id
          ? {
              ...el,
              name: quest.name,
              description: quest.description,
              questions: quest.questions,
            }
          : el
      )
    );
    setModalEdit(false);
  };
  // console.log(quest);

  return (
    <div className="wrapper__modal">
      <div className="modal__header">
        <h1>Create Quiz</h1>
        <div onClick={() => setModalEdit(false)} className="close-btn">
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

          {quest.questions.map((el, index) => (
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
                    updateAnswers(el.id, updatedAnswers); 
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <button type="button" onClick={addQuestion} className="form-btn">
          Add question
        </button>
        <button onSubmit={handleSubmit} className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
