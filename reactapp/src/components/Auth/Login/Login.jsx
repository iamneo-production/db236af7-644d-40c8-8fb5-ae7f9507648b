import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import box from "../../../assets/box.png";
import ribbon1 from "../../../assets/ribbon1.png";
import ribbon2 from "../../../assets/ribbon2.png";
import cornerBox from "../../../assets/corner-box.png";
import mobileCornerBox from "../../../assets/mobile-corner-box.png";
import logo from "../../../assets/giftlogo.svg";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    custom: { required: false, message: "" },
  });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
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
    const isValid = state.password.trim() !== "";
    setErrors((prevState) => ({
      ...prevState,
      password: !isValid,
    }));
    return !isValid;
  };

  const handleLogin = () => {
    let hasError = true;
    hasError = !validateEmail() && hasError;
    hasError = !validatePassword() && hasError;
    if (hasError) {
      setLoader(true);
      axios
        .post("/user/login", state)
        .then((response) => {
          localStorage.setItem("Auth", response.data.token);
          navigate("/user/test");
        })
        .catch((error) => {
          setLoader(false);
          if (error.message === "Network Error") {
            setErrors((prevState) => ({
              ...prevState,
              custom: {
                required: true,
                message: "Unable to Login. Try again later",
              },
            }));
          } else {
            setErrors((prevState) => ({
              ...prevState,
              custom: {
                required: true,
                message: "Check your credentials or Register as new",
              },
            }));
          }
        });
    }
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="content-holder">
      <img id="corner-box" src={cornerBox}></img>
      <div className="content">
        <img id="mobile-corner-box" src={mobileCornerBox}></img>
        <div className="mobile-logo">
          Customized&nbsp;Gifts&nbsp;<img src={logo}></img>
        </div>
        <div className="logo">
          Customized<br></br>
          <img src={logo}></img>&nbsp;Gifts
        </div>
        <div className="LoginContainer">
          <img id="ribbon1" src={ribbon1} />
          <img id="loginBox" src={box} />
          <div className="LoginForm">
            <p>Login</p>
            <input
              className="inputs"
              type="email"
              onChange={handleInputChange}
              name="email"
              value={state.email}
              placeholder="Email address"
            ></input>
            {errors.email && (
              <div className="error-message">Invalid Email address!</div>
            )}
            <input
              className="inputs"
              type="password"
              onChange={handleInputChange}
              name="password"
              value={state.password}
              placeholder="Password"
            ></input>
            {errors.password && (
              <div className="error-message"> Password Required! </div>
            )}
            {errors.custom.required && (
              <div className="error-message">{errors.custom.message} </div>
            )}
            <button className="loginButton" onClick={handleLogin}>
              {loader ? <div className="loader"></div> : "Sign In"}
            </button>
            <span
              style={{ cursor: "pointer" }}
              className="Signup"
              onClick={handleSignUp}
            >
              New? Register Here
            </span>
          </div>
          <img id="ribbon2" src={ribbon2} />
        </div>
      </div>
    </div>
  );
};

export default Login;
