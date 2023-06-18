import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    custom: { required: false, message: '' },
  });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    let hasError = false;

    if (state.email === '') {
      setErrors((prevState) => ({ ...prevState, email: true }));
      hasError = true;
    } else {
      setErrors((prevState) => ({ ...prevState, email: false }));
    }

    if (state.password === '') {
      setErrors((prevState) => ({
        ...prevState,
        password: true,
        custom: { required: true, message: 'Password is required.' },
      }));
      hasError = true;
    } else if (!/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(state.password)) {
      // Password validation
      setErrors((prevState) => ({
        ...prevState,
        password: true,
        custom: {
          required: true,
          message: 'Password should be a mixture of special characters, uppercase, lowercase, and numbers.',
        },
      }));
      hasError = true;
    } else {
      setErrors((prevState) => ({ ...prevState, password: false }));
    }

    if (!hasError) {
      setLoader(true);
      // Handle login logic here
      // Example: validate credentials, make API requests, etc.

      // Assuming successful login, navigate to the desired page
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <div className="error-message">Email is required.</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
            placeholder="Enter Password"
            className={errors.password ? 'error' : ''}
          />
          {errors.password && (
            <div className="error-message">
              {errors.custom.required ? errors.custom.message : 'Password is required.'}
            </div>
          )}
        </div>

        <button type="submit" id="loginButton">Login</button>

        <p className="new-user-message" id="signupLink">
          New User/admin? <Link to="/signup">Sign up</Link>
        </p>

        {loader && <div className="loader"></div>}
      </form>
    </div>
  );
};

export default Login;
