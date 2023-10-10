import { useState } from "react";
import { useGlobalContext } from "./context";

const QuizForm = () => {
  const { handleChange, handleSubmit, quiz, isError } = useGlobalContext();

  return (
    <form onSubmit={handleSubmit} className="quiz">
      <h2>setup quiz</h2>
      <label htmlFor="amount">number of questions</label>
      <input
        type="number"
        name="amount"
        value={quiz.amount}
        min="1"
        id="amount"
        className="form-row"
        onChange={handleChange}
      />
      <label htmlFor="category">category</label>
      <select
        id="category"
        className="form-row"
        name="category"
        value={quiz.category}
        onChange={handleChange}
      >
        <option value="sports">sports</option>
        <option value="history">history</option>
        <option value="politics">politics</option>
      </select>
      <label htmlFor="difficulty">select difficulty</label>
      <select
        id="difficulty"
        name="difficulty"
        className="form-row"
        value={quiz.difficulty}
        onChange={handleChange}
      >
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
      {isError && (
        <p className="error">
          can't generate questions, please try different options
        </p>
      )}
      <button type="submit" className="btn submit-btn">
        submit
      </button>
    </form>
  );
};
export default QuizForm;
