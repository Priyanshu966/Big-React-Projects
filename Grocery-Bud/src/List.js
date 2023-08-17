import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ id, title, removeItem, editItems }) => {
  return (
    <>
      <div className="list">
        <p>{title}</p>
        <span>
          <button className="check" onClick={() => editItems(id)}>
            <FaEdit />
          </button>
          <button className="delete" onClick={() => removeItem(id)}>
            <FaTrash />
          </button>
        </span>
      </div>
    </>
  );
};

export default List;
