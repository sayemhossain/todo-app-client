import React, { useEffect, useState } from "react";
import List from "../List/List";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [todos]);

  const handleList = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const data = { name, description };

    const url = `http://localhost:5000/todos`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    e.target.reset();
    toast("Item added successfully!");
  };

  return (
    <div>
      <div className="container py-5">
        <div className="bg-light py-3">
          <h4 className="text-uppercase text-center">Todo app</h4>
          <div className="w-50 form-container mx-auto py-2 px-3">
            <form action="" onSubmit={handleList}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="enter your list name"
                />
              </div>
              <div>
                <label htmlFor="description" className="form-lable mb-2">
                  {" "}
                  Description
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  cols="10"
                  rows="3"
                  placeholder="Enter your description"
                ></textarea>
              </div>
              <div className="text-center pt-4  ">
                <button className="btn btn-success text-uppercase">
                  Add to List
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h5 className="text-uppercase mt-5 text-danger">Todo List</h5>
          <div className="list-container p-3 text-center">
            {todos.map((todo) => (
              <List key={todo._id} todo={todo}></List>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Home;
