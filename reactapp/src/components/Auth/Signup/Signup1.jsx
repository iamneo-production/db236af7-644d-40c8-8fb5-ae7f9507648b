import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const SignupPage = () => {
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    userType: '',
    username: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [formError, setFormError] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      userType: '',
      username: '',
      email: '',
      mobileNumber: '',
      password: '',
      confirmPassword: '',
    };

    if (userType.trim() === '') {
      newErrors.userType = 'User Type is required';
      valid = false;
    }

    if (username.trim() === '') {
      newErrors.username = 'Username is required';
      valid = false;
    }

    if (email.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (mobileNumber.trim() === '') {
      newErrors.mobileNumber = 'Mobile Number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(mobileNumber.trim())) {
      newErrors.mobileNumber = 'Invalid Mobile Number.';
      valid = false;
    }

    if (password.trim() === '') {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (!isPasswordValid(password.trim())) {
      newErrors.password =
        'Password should be a mixture of special characters, uppercase, lowercase, and numbers.';
      valid = false;
    }

    if (confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'Confirm Password is required';
      valid = false;
    } else if (password.trim() !== confirmPassword.trim()) {
      newErrors.confirmPassword = "Passwords don't match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const isPasswordValid = (checkpassword) => {
    // Password should contain at least one uppercase letter, one lowercase letter, one special character, and one number.
    const checkpasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{}[\]|;:'",.<>/?]).{8,}$/;
    return checkpasswordRegex.test(password);
  };


  const handleSubmit = async(event) => {
    event.preventDefault();

    // Perform form validation
    if (!validateForm()) {
      setFormError('');
      return;
    }
    try {
      let signupEndpoint = '';
      if (userType === 'admin') {
        signupEndpoint = 'https://8081-dadecaeedcbbfdebbecaddbaaecadafbad.project.examly.io/admin/signup';
      } else if (userType === 'user') {
        signupEndpoint = 'https://8081-dadecaeedcbbfdebbecaddbaaecadafbad.project.examly.io/user/signup';
      }
  
      const response = await fetch(signupEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userType,
          username,
          email,
          mobileNumber,
          password,
        }),
      });
  
      if (response.ok) {
        // Successful signup
        if (userType === 'admin') {
          navigate('https://8081-dadecaeedcbbfdebbecaddaeffdec.project.examly.io/admin/login'); // Navigate to admin login page
        } else if (userType === 'user') {
          navigate('https://8081-dadecaeedcbbfdebbecaddaeffdec.project.examly.io/user/login'); // Navigate to user login page
        }
      } else {
        // Handle signup error
        const responseData = await response.json();
        setFormError(responseData.message);
      }
    } catch (error) {
      // Handle network or server error
      console.error('Signup error:', error);
      setFormError('An error occurred during signup. Please try again later.');
    }
  
    // Reset form fields after submission
    setUserType('');
    setUsername('');
    setEmail('');
    setMobileNumber('');
    setPassword('');
    setConfirmPassword('');
  };
    

  return (
    <div className="signup-container">
      <h1>Register</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="admin/user"
            placeholder="Enter admin/user"
            value={userType}
            onChange={handleUserTypeChange}
          />
          {errors.userType && <p className="error-message">{errors.userType}</p>}
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsernameChange}
          />
          {errors.username && <p className="error-message">{errors.username}</p>}
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="mobileNumber"
            placeholder="Enter Mobilenumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
          {errors.mobileNumber && <p className="error-message">{errors.mobileNumber}</p>}
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" id="submitButton">Submit</button>

        {formError && <p className="error-message">{formError}</p>}

        <p className="login-link" id="signinLink">
          Already a user? <Link to="/login" id="signinlink">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;