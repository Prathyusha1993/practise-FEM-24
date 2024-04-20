import React from "react";
import NavbarComp from "./components/NavbarCompo";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComp />
        <MainPage />
        <Routes>
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
