import React, { useState } from "react";
// import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "../styles/register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateForm = () => {
    const { firstName, lastName, email, password } = form;
    const newErrors = {};
    if (!firstName || firstName === "")
      newErrors.firstName = "Please enter First Name";
    if (!lastName || lastName === "")
      newErrors.lastName = "Please enter Last Name";
    if (!email || email === "") newErrors.email = "Please enter Email";
    if (!password || password === "")
      newErrors.password = "Please enter Password";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    // if (Object.keys(formErrors).length > 0) {
    //   setErrors(formErrors);
    // } else {
    //   //   console.log("form submitted");
    //   try {
    //     const userCeredential = await createUserWithEmailAndPassword(
    //       auth,
    //       form.email,
    //       form.password
    //     );
    //     console.log(userCeredential);
    //     const user = userCeredential.user;
    //     localStorage.setItem("token", user.accessToken);
    //     localStorage.setItem("user", JSON.stringify(user));
    //     navigate("/");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    try {
      const userCeredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log(userCeredential);
      const user = userCeredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/login");
    } catch (error) {
      console.log(error);
      setErrors(formErrors);
    }
    // const formErrors = validateForm();
    // if (Object.keys(formErrors).length > 0) {
    //   setErrors(formErrors);
    // } else {
    //   console.log("form submitted");
    // }
    // console.log(form);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="reg-container">
        <Form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }}>Sign Up</h1>
          <p style={{ textAlign: "center" }}>
            Please fill in this form to create an account!
          </p>
          {/*<Row>
            <Col>
               <Form.Label>First Name</Form.Label>
              <Form.Control
                className="input-col"
                value={form.firstName}
                onChange={(e) => setField("firstName", e.target.value)}
                isInvalid={!!errors.firstName}
                placeholder="First name"
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={form.lastName}
                onChange={(e) => setField("lastName", e.target.value)}
                className="input-col"
                isInvalid={!!errors.lastName}
                placeholder="Last name"
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Col>
          </Row> */}
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              className="input-box"
              isInvalid={!!errors.email}
              type="email"
              placeholder="Enter email"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={form.password}
              onChange={(e) => setField("password", e.target.value)}
              className="input-box"
              isInvalid={!!errors.password}
              type="password"
              placeholder="Password"
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              value={form.password}
              onChange={(e) => setField("password", e.target.value)}
              className="input-box"
              type="password"
              placeholder="Password"
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          <p style={{ marginTop: "20px" }}>
            Already have account, Please login. <Link to="/login">Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
