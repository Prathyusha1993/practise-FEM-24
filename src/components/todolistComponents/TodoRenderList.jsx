import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TodoRenderList = ({ task, handleDeleteTodos, handleEditTodo }) => {
  return (
    <div className="todo-list">
      <p style={{ marginTop: "7px" }}>{task.task}</p>
      <div className="todo-icons">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => handleEditTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => handleDeleteTodos(task.id)}
        />
      </div>
    </div>
  );
};

export default TodoRenderList;
