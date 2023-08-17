import { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  }
  return [];
};

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id == editId) {
            return { id: editId, title: name };
          }
          return item;
        })
      );

      showAlert(true, "success", "value changed");
      setIsEditing(false);
      setName("");
    } else {
      const newList = { id: new Date().getTime().toString(), title: name };
      setList([...list, newList]);
      showAlert(true, "success", "item added to the list");
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const removeItem = (id) => {
    const filterList = list.filter((item) => item.id !== id);
    setList(filterList);
  };
  const editItems = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setName(specificItem.title);
    setIsEditing(true);
    setEditId(id);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <main>
      <section className="grocery-cont">
        {alert.show && <Alert {...alert} showAlert={showAlert} />}
        <h2>grocery bud</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-text"
            placeholder="e.g.eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">{isEditing ? "edit" : "submit"}</button>
        </form>
        <div className="list-cont">
          {list.map((item) => {
            return (
              <List
                key={item.id}
                {...item}
                removeItem={removeItem}
                editItems={editItems}
              />
            );
          })}
        </div>
        <button className="clear" onClick={() => setList([])}>
          clear items
        </button>
      </section>
    </main>
  );
};

export default App;
