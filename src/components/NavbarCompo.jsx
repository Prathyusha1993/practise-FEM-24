import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import TodoList from "./TodoList";

function NavbarComp() {
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
                {/* <Link to={"/todolist"}> */}
                <NavDropdown.Item href="#action4">Todo List</NavDropdown.Item>
                {/* </Link> */}
                <NavDropdown.Item href="#action4">Calendar</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Remainder</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Planner</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Company" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">History</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Blog</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">Career</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">Login</Button>
              <Button variant="outline-success">Register</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

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
