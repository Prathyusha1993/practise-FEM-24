import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FcPlanner } from "react-icons/fc";
import { FaBlogger } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const NavbarComp = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Snap</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Features" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/todolist">
                  <FcTodoList style={{ marginRight: "7px" }} />
                  Todo List
                </NavDropdown.Item>
                <NavDropdown.Item href="/calendar">
                  <FaCalendarAlt style={{ marginRight: "7px" }} />
                  Calendar
                </NavDropdown.Item>
                <NavDropdown.Item href="/remainder">
                  <IoMdNotifications style={{ marginRight: "7px" }} />
                  Remainder
                </NavDropdown.Item>
                <NavDropdown.Item href="/planner">
                  <FcPlanner style={{ marginRight: "7px" }} />
                  Planner
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Company" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/history">
                  <FaHistory style={{ marginRight: "7px" }} />
                  History
                </NavDropdown.Item>
                <NavDropdown.Item href="/ourteam">
                  <RiTeamFill style={{ marginRight: "7px" }} /> Our Team
                </NavDropdown.Item>
                <NavDropdown.Item href="/blog">
                  <FaBlogger style={{ marginRight: "7px" }} /> Blog
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/career">Career</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Link to="/login">
                <Button variant="outline-success">Login</Button>
              </Link>
              <Button onClick={handleLogout} variant="outline-success">
                Logout
              </Button>
              <Link to="/register">
                <Button
                  style={{ marginLeft: "10px" }}
                  variant="outline-success"
                >
                  Register
                </Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavScrollExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Snap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <NavDropdown title="Features" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Todo List</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Calendar
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Remainder
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Planner
//               </NavDropdown.Item>

//             </NavDropdown>
//             <NavDropdown title="Company" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">History</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Our Team
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Blog
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#action2">Career</Nav.Link>
//             <Nav.Link href="#action2">About</Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Button variant="outline-success" style={{color: 'black'}}>Login</Button>
//             <Button variant="outline-success">Register</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;
