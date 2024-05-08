import React, { useState } from "react";

const Todo = ({ handleAddTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodos(todo);
    setTodo("");
  };
  return (
    <div className="todo-container">
      {/* <h4>Get Things Done!</h4> */}
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Enter Your Task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="todo-btn" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Todo;
