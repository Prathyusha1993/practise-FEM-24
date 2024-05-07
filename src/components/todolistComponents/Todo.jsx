import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default Todo;
