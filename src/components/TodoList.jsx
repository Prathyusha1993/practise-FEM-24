import React from "react";
import TodoWrapper from "./todolistComponents/TodoWrapper";

const TodoList = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <h4>This is TodoList Component</h4> */}
      <TodoWrapper />
    </div>
  );
};

export default TodoList;
