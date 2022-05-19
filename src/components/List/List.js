import React, { useEffect, useState } from "react";
import "./List.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const List = ({ todo }) => {
  const { _id, name, description } = todo;
  const [todos, setTodos] = useState([]);
  const [style, setStyle] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [todos]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/todos/${id}`;
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          const remaining = todos.filter((todo) => todo._id !== id);
          setTodos(remaining);
        });
    }
  };
  const handleClick = () => {
    setStyle(false);
    toast("Completed");
  };
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h6 class="card-title text-uppercase">{name}</h6>
          <p className={style ? "card-text" : "edit"}>{description}</p>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={handleClick}
            type="button"
            class="btn btn-primary ms-2"
          >
            Complete
          </button>
        </div>
      </div>
      <div className="text-center"></div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default List;
