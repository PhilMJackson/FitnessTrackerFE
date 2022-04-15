import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import { ErrorHandler } from ".";

const Login = ({ token, setToken, setUsername }) => {
  // ================= Use Variables ==========
  let navigate = useNavigate();
  let initialFormState = { username: "", password: "" };
  // ================= States =========
  const [formState, setFormState] = useState(initialFormState);
  const [loginError, setLoginError] = useState({});

  // ================ Helper Functions =======
  const updateForm = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await loginUser(formState.username, formState.password);
      console.log("RESULT:", result);
      if (result.error) {
        setLoginError(result);
      } else {
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", result.user.username);
        console.log(result);
        setToken(result.token);
        setUsername(result.user.username);
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setFormState(initialFormState);
    }
  };

  // ================ Return =======

  // ================ Return =======
  return (
    <div>
      <form className="formCard" onSubmit={userSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formState.username}
          onChange={updateForm}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formState.password}
          onChange={updateForm}
        ></input>
        <button type="submit">Log In</button>
      </form>
      {loginError.error ? <ErrorHandler message={loginError.message} /> : null}
    </div>
  );
};

export default Login;
