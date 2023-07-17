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

  const handleLogin = () => {
    let hasError = true;
    hasError = !validateEmail() && hasError
    hasError = !validatePassword() && hasError
    if (hasError) {
      setLoader(true);
      axios.post("/user/login", state)
      .then((response) => {
        localStorage.setItem("Auth", response.data.token)
        navigate("/user/test");
      }).catch((error)=>{
        setLoader(false);
        if(error.message === "Network Error")
        {
          setErrors(prevState => ({
            ...prevState,
            custom: { required: true, message: 'Unable to Login. Try again later' }
          }))
        }
        else{
          setErrors(prevState => ({
            ...prevState,
            custom: { required: true, message: 'Check your credentials or Register as new' }
          }))
        }
      })
    }
  };  
  const handleSignUp = () => {
    navigate("/signup")
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
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