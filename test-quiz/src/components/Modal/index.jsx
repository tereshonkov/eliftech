import Checbox from "../CheckBox";
import InputQuest from "../InputQuest";
import Radio from "../Radio";
import Select from "../Select";
import "./Modal.css";
import { useState } from "react";

export default function Modal({setModal}) {
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",

  });
  // console.log(answers);
  
  return (
    <div className="wrapper__modal">
      <div className="modal__header">
      <h1>Create Quiz</h1>
      <div onClick={() => setModal(false)} className="close-btn">
        <span className="item-btn"></span>
        <span className="item-btn2"></span>
      </div>
      </div>
      <form className="modal__form">
        <div className="wrapper__quest">
          <div className="modal__quest">
            <InputQuest />
          <Select value={answers.answer1} setValue={(someValue) => setAnswers((prev) => ({...prev, answer1: someValue}))}/>
          </div>
          {answers.answer1 === 'radio' &&   <Radio />}
          {answers.answer1 === 'checkbox' &&   <Checbox />}
          <div className="modal__quest">
            <InputQuest />
            <Select  value={answers.answer2} setValue={(someValue) => setAnswers((prev) => ({...prev, answer2: someValue}))}/>
          </div>
          {answers.answer2 === 'radio' &&   <Radio />}
          {answers.answer2 === 'checkbox' &&   <Checbox />}
        </div>
        <button className="form-btn">Add question</button>
      </form>
    </div>
  );
}
