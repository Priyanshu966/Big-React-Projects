import { useState, useEffect } from "react";
import QuizForm from "./QuizForm";
import { useGlobalContext } from "./context";
import Modal from "./Modal";

const App = () => {
  const {
    isLoading,
    isWaiting,
    questions,
    quesIndex,
    nextQues,
    correctAns,
    isModalOpen,
  } = useGlobalContext();

  if (isWaiting) {
    return (
      <main className="section">
        <QuizForm />
      </main>
    );
  }
  if (isLoading) {
    return (
      <main>
        <div className="loading"></div>
      </main>
    );
  }

  const { question, correct_answer, incorrect_answers } = questions[quesIndex];
  const options = [...incorrect_answers];
  const tempItem = Math.floor(Math.random() * 4);
  if (tempItem == 3) {
    options.push(correct_answer);
  } else {
    options.push(options[tempItem]);
    options[tempItem] = correct_answer;
  }

  return (
    <main className="section">
      <article className="quiz quiz-ques">
        <p className="check">correct answers :{`${correctAns}/${quesIndex}`}</p>
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        <div className="options">
          {options.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => nextQues(item)}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            );
          })}
        </div>

        <button className="btn next-ques" onClick={nextQues}>
          next Question
        </button>
      </article>
      {isModalOpen && <Modal />}
    </main>
  );
};

export default App;
