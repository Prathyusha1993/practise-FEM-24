import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Redirect,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Protected from "./components/Protected";
import MainPage from "./components/MainPage";
import TodoList from "./components/TodoList";
import Calendar from "./components/Calendar";
import Remainder from "./components/Remainder";
import Planner from "./components/Planner";
import History from "./components/History";
import OurTeam from "./components/OurTeam";
import Blog from "./components/Blog";
import Career from "./components/Career";
import About from "./components/About";
import NavbarComp from "./components/NavbarCompo";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       {/* <Route path="/" element={<NavbarComp />} /> */}
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/" element={<Protected />} />
//       <Route path="/main" element={<MainPage />} />
//       <Route
//         path="/todolist"
//         render={() => (loggedIn ? <Redirect to="/login" /> : <TodoList />)}
//         element={<TodoList />}
//       />
//       <Route path="/calendar" element={<Calendar />} />
//       <Route path="/remainder" element={<Remainder />} />
//       <Route path="/planner" element={<Planner />} />
//       <Route path="/history" element={<History />} />
//       <Route path="/ourteam" element={<OurTeam />} />
//       <Route path="/blog" element={<Blog />} />
//       <Route path="/career" element={<Career />} />
//       <Route path="/about" element={<About />} />
//     </Route>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
{
  /* <RouterProvider router={router} /> */
}
