import React from "react";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import Calendar from "./components/Calendar";
import Remainder from "./components/Remainder";
import Planner from "./components/Planner";
import History from "./components/History";
import OurTeam from "./components/OurTeam";
import Blog from "./components/Blog";
import Career from "./components/Career";
import About from "./components/About";

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
          <Route path="/history" element={<History />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
