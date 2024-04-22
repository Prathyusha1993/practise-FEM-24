import React from "react";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import Calendar from "./components/Calendar";
import Remainder from "./components/Remainder";
import Planner from "./components/Planner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/remainder" element={<Remainder />} />
          <Route path="/planner" element={<Planner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
