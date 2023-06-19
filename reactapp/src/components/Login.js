import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

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

    console.log(email, password);
    navigate("/dashboard");
  };

  // Handle login logic here, e.g., make API requests, validate credentials, etc.

  return (
    <div className={classes["login-container"]}>
      <h1>Login</h1>
      <form className={classes["login-form"]} onSubmit={handleLogin}>
        <div className={classes["form-group"]}>
          <label className={classes["welcome"]}>
            <h2>Welcome Back!</h2>
          </label>
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

        <div className={classes["form-group"]}>
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

        {error && <p className={classes["error-message"]}>{error}</p>}

        <button type="submit">Login</button>

        <p className={classes["new-user-message"]}>
          New User/Admin? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
