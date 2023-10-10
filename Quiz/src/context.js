import axios from "axios";
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const AppContext = createContext();
const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppProvider = ({ children }) => {
  //States
  const [questions, setQuestions] = useState([]);
  const [quesIndex, setQuesIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [correctAns, setCorrectAns] = useState(0);
  const [quiz, setQuiz] = useState({
    amount: 2,
    category: "sports",
    difficulty: "easy",
  });

  //For handling quiz form
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    fetchQuestions(url);
  };
  const nextQues = (ans) => {
    if (ans == questions[quesIndex].correct_answer) {
      setCorrectAns((oldAns) => {
        let newAns = oldAns + 1;
        return newAns;
      });
    }
    setQuesIndex((oldIndex) => {
      let newIndex = oldIndex + 1;
      if (newIndex >= questions.length) {
        setIsModalOpen(true);
        return oldIndex;
      }
      return newIndex;
    });
  };

  const modalClose = () => {
    setIsModalOpen(false);
    setIsWaiting(true);
    setCorrectAns(0);
    setQuesIndex(0);
  };

  //For fetching quiz api
  const fetchQuestions = async (url) => {
    setIsLoading(true);
    setIsWaiting(false);

    const resp = await axios.get(url);
    if (resp) {
      if (resp.data.results.length >= 1) {
        console.log(resp.data.results);
        setIsLoading(false);
        setIsWaiting(false);
        setQuestions(resp.data.results);
      } else {
        setIsError(true);
        setIsWaiting(true);
        setIsLoading(false);
      }
    } else {
      setIsWaiting(true);
    }
  };

  return (
    <AppContext.Provider
      value={{
        questions,
        isLoading,
        isError,
        isWaiting,
        handleChange,
        handleSubmit,
        quiz,
        quesIndex,
        nextQues,
        correctAns,
        isModalOpen,
        modalClose,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
