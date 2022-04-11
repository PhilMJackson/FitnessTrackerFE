import React, { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";
const Register = ({ token, setToken, username, setUsername }) => {
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await registerUser(username, password);
      if (result.token) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", result.user.username);
        console.log(result);
        setToken(result.token);
        setUsername(result.user.username);
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setUsername("");
      setPassword("");
      navigate("/");
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
    </div>
  );
};

export default Register;
