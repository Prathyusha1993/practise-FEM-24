import React, { useState } from "react";
import Todo from "./Todo";
import TodoRenderList from "./TodoRenderList";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodos = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo }]);
    console.log(todos);
  };

  const handleDeleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const handleEditTodoTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="todo-wrapper">
      <h4 className="todo-heading">Get Things Done!</h4>
      <Todo handleAddTodos={handleAddTodos} />
      {todos.map((item, index) =>
        item.isEditing ? (
          <EditTodoForm handleEditTodoTask={handleEditTodoTask} task={item} />
        ) : (
          <TodoRenderList
            task={item}
            key={index}
            handleDeleteTodos={handleDeleteTodos}
            handleEditTodo={handleEditTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
