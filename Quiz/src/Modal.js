import { useGlobalContext } from "./context";

const Modal = () => {
  const { questions, correctAns, isModalOpen, modalClose } = useGlobalContext();
  return (
    <section
      className={isModalOpen ? `modal-overlay modal-open` : `modal-overlay`}
    >
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>
          You answered {Math.floor((correctAns / questions.length) * 100)}% of
          questions correctly
        </p>
        <button className="btn" onClick={modalClose}>
          play again
        </button>
      </div>
    </section>
  );
};
export default Modal;
