import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Signup.module.css";

const Signup = () => {
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    userType: "",
    username: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState("");

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
      userType: "",
      username: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    };

    if (userType.trim() === "") {
      newErrors.userType = "User Type is required";
      valid = false;
    }

    if (username.trim() === "") {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (mobileNumber.trim() === "") {
      newErrors.mobileNumber = "Mobile Number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(mobileNumber.trim())) {
      newErrors.mobileNumber = "Invalid Mobile Number.";
      valid = false;
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required";
      valid = false;
    } else if (!isPasswordValid(password.trim())) {
      newErrors.password = "Create a Strong Password.Example Alex@321";
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

  const isPasswordValid = (password) => {
    // Password should contain at least one uppercase letter, one lowercase letter, one special character, and one number.
    const passwordRegex =
      /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*()\-_=+{}[\]|;:'",.<>/?]).{8,}$/;
    const passwordIsValid = passwordRegex.test(password);
    return passwordIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Perform form validation
    if (!validateForm()) {
      setFormError("");
      return;
    }

    // Perform signup logic here, e.g., make API requests, validate inputs, etc.
    console.log("User Type:", userType);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Mobile Number:", mobileNumber);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Reset form fields after submission
    setUserType("");
    setUsername("");
    setEmail("");
    setMobileNumber("");
    setPassword("");
    setConfirmPassword("");

    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div className={classes["signup-container"]}>
      <h1>Register</h1>
      <form className={classes["signup-form"]} onSubmit={handleSubmit}>
        <div className={classes["form-group"]}>
          <input
            type="text"
            id="admin/user"
            placeholder="Enter admin/user"
            value={userType}
            onChange={handleUserTypeChange}
          />
          {errors.userType && (
            <p className={classes["error-message"]}>{errors.userType}</p>
          )}
        </div>

        <div className={classes["form-group"]}>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && (
            <p className={classes["error-message"]}>{errors.email}</p>
          )}
        </div>

        <div className={classes["form-group"]}>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
          />
          {errors.username && (
            <p className={classes["error-message"]}>{errors.username}</p>
          )}
        </div>

        <div className={classes["form-group"]}>
          <input
            type="tel"
            id="mobileNumber"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
          {errors.mobileNumber && (
            <p className={classes["error-message"]}>{errors.mobileNumber}</p>
          )}
        </div>

        <div className={classes["form-group"]}>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && (
            <p className={classes["error-message"]}>{errors.password}</p>
          )}
        </div>

        <div className={classes["form-group"]}>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {errors.confirmPassword && (
            <p className={classes["error-message"]}>{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit">Submit</button>

        {formError && <p className={classes["error-message"]}>{formError}</p>}

        <p className={classes["already-a-user-message"]} id="signinLink">
          Already a user? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
