import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";
import Button from "react-bootstrap/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loginForm, setLoginForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const setField = (field, value) => {
    setLoginForm({
      ...loginForm,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateForm = () => {
    const { email, password } = loginForm;
    const newErrors = {};
    if (!email || email === "")
      newErrors.email = "Please enter registered email";
    if (!password || password === "")
      newErrors.password = "Please enter password";
    return newErrors;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    // if (Object.keys(formErrors).length > 0) {
    //   setErrors(formErrors);
    // } else {
    //   console.log("loginForm submitted");
    // }
    // console.log(loginForm);
    try {
      const userCeredential = await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password
      );
      console.log(userCeredential);
      const user = userCeredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrors(formErrors);
    }
  };

  return (
    <div className="input-container">
      <h2 className="text-h">Login</h2>
      <Form onSubmit={handleLoginSubmit} className="form-container">
        <Form.Group className="mb-3 input-box" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={loginForm.email}
            isInvalid={!!errors.email}
            onChange={(e) => setField("email", e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 input-box" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={loginForm.password}
            onChange={(e) => setField("password", e.target.value)}
            isInvalid={!!errors.password}
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
        <p style={{ marginTop: "20px", fontFamily: "sans-serif" }}>
          Need to SignUp? <Link to="/register">Create Account</Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
