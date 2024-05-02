import React, { useState } from "react";
import MainPage from "./components/MainPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import TodoList from "./components/TodoList";
import Calendar from "./components/Calendar";
import Remainder from "./components/Remainder";
import Planner from "./components/Planner";
import History from "./components/History";
import OurTeam from "./components/OurTeam";
import Blog from "./components/Blog";
import Career from "./components/Career";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Protected from "./components/Protected";
import NavbarComp from "./components/NavbarCompo";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {/* <NavbarComp /> */}
      <Outlet />
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/todolist"
            // render={() => (loggedIn ? <TodoList /> : <Navigate to="/login" />)}
            // element={loggedIn ? <TodoList /> : <Navigate to="/login" replace />}
            element={<TodoList />}
          />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/remainder" element={<Remainder />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/history" element={<History />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Protected />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
