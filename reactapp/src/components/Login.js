import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // console.log(event);

    console.log(email, password);

    // Check if email or password is invalid
    // if (email !== "example@example.com" || password !== "password") {
    //   setError("Invalid email or password");
    //   return;
    navigate("/dashboard");
  };

  // Handle login logic here, e.g., make API requests, validate credentials, etc.
  // console.log("Email:", email);
  // console.log("Password:", password);

  // Navigate to the desired page on successful login

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Login</button>

        <p className="new-user-message">
          New User/Admin? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
