import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const Question = ({ title, info }) => {
  const [showAns, setShowAns] = useState(false);

  return (
    <div className="ques-box">
      <div className="ques">
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setShowAns(!showAns);
          }}
        >
          {showAns ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAns && (
        <div className="ans">
          <p>{info}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
