import React, { useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialFormValue = {
  username: "",
  password: "",
};
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // useEffect(() => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // });
  // const error = "";
  //replace with error state 

  const [formValue, setFormValue] = useState(initialFormValue);
  const [error, setError] = useState("");
  const { push } = useHistory();

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", formValue)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        setError("");
        push("/bubblepage");
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
    setFormValue(initialFormValue);
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              data-testid="username"
              type="text"
              value={formValue.username}
              name="username"
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <input
              data-testid="password"
              type="password"
              value={formValue.password}
              name="password"
              onChange={handleChange}
            />
          </label>
          <button>Login</button>
        </form>
      </div>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.