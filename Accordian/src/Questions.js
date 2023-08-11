import Question from "./Question";
import questions from "./data";

const Questions = () => {
  return (
    <section className="ques-cont">
      <h2>questions</h2>
      {questions.map((question) => {
        return <Question {...question} />;
      })}
    </section>
  );
};

export default Questions;
