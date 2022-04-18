import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import { ErrorHandler } from ".";

const Login = ({
  setToken,
  setUsername,
  isOpen,
  setIsOpen,
  error,
  setError,
}) => {
  // ================= Use Variables ==========
  let navigate = useNavigate();
  let initialFormState = { username: "", password: "" };
  // ================= States =========
  const [formState, setFormState] = useState(initialFormState);

  // ================ Helper Functions =======
  const updateForm = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await loginUser(formState.username, formState.password);
      if (result.error) {
        setError(result);
        setIsOpen(true);
      } else {
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", result.user.username);
        setToken(result.token);
        setUsername(result.user.username);
        setFormState(initialFormState);
        navigate("/");
      }
    } catch (error) {
      console.error("Error: ", error);
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
        <button id="bttn" type="submit">
          Log In
        </button>
      </form>
      {error.error ? (
        <ErrorHandler
          name={error.name}
          message={error.message}
          open={isOpen}
          setIsOpen={setIsOpen}
          setError={setError}
        />
      ) : null}
    </div>
  );
};

export default Login;
