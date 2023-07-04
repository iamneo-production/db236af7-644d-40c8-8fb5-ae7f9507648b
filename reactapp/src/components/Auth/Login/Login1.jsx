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

  const getUserRole = (responseData) => { 
    if (responseData.role === 'admin') {
      return 'admin';
    } else if (responseData.role === 'user') {
      return 'user';
    } else {
      return 'default';
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(state.email);
    setErrors((prevState) => ({
      ...prevState,
      email: !isValid,
    }));
    return !isValid;
  };

  const validatePassword = () => {
    const isValid = state.password.trim() !== '';
    setErrors((prevState) => ({
      ...prevState,
      password: !isValid,
    }));
    return !isValid;
  };

  const handleLogin = async(event) => {
    event.preventDefault();

    let hasError = false;

    hasError = validateEmail() || hasError;
    hasError = validatePassword() || hasError;

    if (!hasError) {
      setLoader(true);
      // Handle login logic here
      // Example: validate credentials, make API requests, etc.
      try {
        const response = await fetch('https://8081/Login ', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state),
        });
      
        if (response.ok) {
          // Successful login
          // Perform any necessary actions like store authentication token
        const userRole = getUserRole(responseData); // Replace this with your actual logic to get the user's role
        if (userRole === 'admin') {
          navigate('https://8081/admin/gifts');
        } else if (userRole === 'user') {
          navigate('https://8081/user/homepage');
        } else {
          // Default fallback route
          navigate('https://8081/');
        }
        } else {
          // Handle login error
          // Display error message to the user
          setErrors(prevState => ({
            ...prevState,
            custom: { required: true, message: 'Invalid email or password.' },
          }));
        }
      } catch (error) {
        // Handle network or server error
        console.error('Login error:', error);
        setErrors(prevState => ({
          ...prevState,
          custom: { required: true, message: 'An error occurred during login. Please try again later.' },
        }));
      }
      
      setLoader(false);
      
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

        <button  type="submit">Login</button>

        <p className="new-user-message" id="signupLink">
          New User/admin? <Link to="/signup">Sign up</Link>
        </p>

        {loader && <div className="loader"></div>}
      </form>
    </div>
  );
};

export default Login;