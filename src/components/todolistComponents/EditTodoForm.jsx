import React, { useState } from "react";

const EditTodoForm = ({ handleEditTodoTask, task }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditTodoTask(todo, task.id);
    setTodo("");
  };
  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Enter Your Task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="todo-btn" type="submit">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
