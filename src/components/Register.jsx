import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorHandler } from ".";
import { registerUser } from "../api";
const Register = ({
  token,
  setToken,
  username,
  setUsername,
  isOpen,
  setIsOpen,
  error,
  setError,
}) => {
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await registerUser(username, password);
      if (result.error) {
        setError(result);
        setIsOpen(true);
      } else if (result.token) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", result.user.username);
        console.log(result);
        setToken(result.token);
        setUsername(result.user.username);
        setUsername("");
        setPassword("");
        navigate("/");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      <form className="formCard" onSubmit={userSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Register</button>
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

export default Register;
