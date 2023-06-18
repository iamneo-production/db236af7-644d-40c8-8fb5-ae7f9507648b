import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import giftshop from './giftshop.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here, e.g., make API requests, validate credentials, etc.
    console.log('Email:', email);
    console.log('Password:', password);
    // Navigate to the desired page on successful login
    navigate('/Login');
  };

  
  return (
   <>
   {/* <div className='bgimage'>
      <img src={giftshop}></img>
    </div> */}

    <div className="login-container">
      
      <h1>Login</h1>
      <form className="login-form">
        <div className="form-group">
          <label className="welcome">Welcome Back!</label>
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

        <button type="button" onClick={handleLogin}>
          Login
        </button>

        <p className="new-user-message">
          New User/Admin? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
   </>
    
  );
};

export default LoginPage;