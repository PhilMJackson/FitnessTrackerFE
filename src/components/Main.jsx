import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar, Home, Register } from ".";

const Main = () => {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, [token]);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, [username]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Register"
          element={
            <Register
              setToken={setToken}
              username={username}
              setUsername={setUsername}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Main;
