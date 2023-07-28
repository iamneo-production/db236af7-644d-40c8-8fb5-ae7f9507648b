import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (username.trim() === "") {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required";
      valid = false;
    } else if (!isPasswordValid(password.trim())) {
      newErrors.password =
        "Password should be a mixture of special characters, uppercase, lowercase, and numbers.";
      valid = false;
    }

    if (confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm Password is required";
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
    const checkpasswordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{}[\]|;:'",.<>/?]).{8,}$/;
    return checkpasswordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    if (validateForm()) {
      axios
        .post("/admin/signup", {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
            
          setLoader(false);
          console.log(response.data);
          alert(`admin Added`);
          navigate('/');
        })
        .catch((error) => {
          console.log(error.response);
          setLoader(false);
          if (error.response.status === 400)
            setFormError("User already exists try Login");
        });
    }
  };

  return (
    <div className="signup-container">
      <h1>Register</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
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
          {errors.username && (
            <p className="error-message">{errors.username}</p>
          )}
        </div>

       
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
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
        {loader ? (
          <div className="loader"></div>
        ) : (
          <button className="signupBtn" type="submit" id="submitButton">
            Submit
          </button>
        )}

        {formError && <p className="error-message">{formError}</p>}

        <p className="login-link" id="signinLink">
          Already a user?{" "}
          <Link to="/" id="signinlink">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
