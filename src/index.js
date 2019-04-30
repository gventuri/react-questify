import React, { useState } from "react";
import styles from "./styles.module.css";

const Questify = ({ questions }) => {
  let [currentStep, setCurrentStep] = useState(0);
  let [currentAnswer, setCurrentAnswer] = useState("");
  let [answers, setAnswers] = useState({});

  const onInputChange = e => {
    setCurrentAnswer(e.target.value);
  };
  const onSelectChange = e => {
    submitForm(e.target.value);
  };
  const onOptionChoose = opt => {
    submitForm(opt);
  };
  const onFormSubmit = e => {
    if (e) e.preventDefault();

    submitForm();
  };

  const submitForm = (answer = "") => {
    addAnswer(answer);
    nextStep();
    clearInput();
  };
  const addAnswer = (answer = "") => {
    const name = questions[currentStep].name;

    setAnswers({
      ...answers,
      [name]: answer || currentAnswer
    });
  };
  const nextStep = () => {
    for (let obj in questions[currentStep].answers) {
      if (currentAnswer === obj)
        return setCurrentStep(questions[currentStep].answers[obj].goTo);
    }

    return setCurrentStep(questions[currentStep].answers.default.goTo);
  };
  const clearInput = () => {
    setCurrentAnswer("");
  };

  return (
    <form className={styles.question} onSubmit={onFormSubmit}>
      {(questions[currentStep].type === "text" ||
        questions[currentStep].type === "url") && (
        <div>
          <input
            id="question"
            type={questions[currentStep].type}
            placeholder={`(Es. ${questions[currentStep].suggestion})`}
            value={currentAnswer}
            onChange={onInputChange}
            autoFocus
            required
          />
          <label htmlFor="question">{questions[currentStep].text}</label>
        </div>
      )}

      {questions[currentStep].type === "select" && (
        <div>
          <select id="question" onChange={onSelectChange} autoFocus required>
            <option value="" />
            {questions[currentStep].options.map(question => (
              <option>{question}</option>
            ))}
          </select>
          <label htmlFor="question">{questions[currentStep].text}</label>
        </div>
      )}

      {questions[currentStep].type === "options" && (
        <div>
          <label htmlFor="question">{questions[currentStep].text}</label>
          <div id="questions" className={styles.mt2}>
            {questions[currentStep].options.map(question => (
              <a
                href="#"
                onClick={() => onOptionChoose(question)}
                className={styles.button}
              >
                {question}
              </a>
            ))}
          </div>
        </div>
      )}

      {questions[currentStep].type === "color" && (
        <div>
          <label htmlFor="question">{questions[currentStep].text}</label>
          <div id="questions" className={styles.mt2}>
            {questions[currentStep].options.map(question => (
              <a
                href="#"
                style={{ backgroundColor: question }}
                onClick={() => onOptionChoose(question)}
                className={`${styles.button} ${styles.button__color}`}
              />
            ))}
          </div>
        </div>
      )}

      {questions[currentStep].type === "images" && (
        <p>Images are not supported so far!</p>
      )}
    </form>
  );
};

export default Questify;
