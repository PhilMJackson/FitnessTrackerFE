import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar, Home, Register, Login, Routines, MyRoutines } from ".";
import { fetchRoutines, fetchUserRoutines } from "../api";

const Main = () => {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [routines, setRoutines] = useState([]);
  const [userRoutines, setUserRoutines] = useState([]);

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

  useEffect(() => {
    const getAllRoutines = async () => {
      const allRoutines = await fetchRoutines();
      setRoutines(allRoutines.reverse());
    };
    getAllRoutines();
  }, []);

  useEffect(() => {
    const getUserRoutines = async () => {
      const allUserRoutines = await fetchUserRoutines();
      if (allUserRoutines.length) {
        setUserRoutines(allUserRoutines.reverse());
      } else return;
    };
    getUserRoutines();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Routines"
          element={<Routines routines={routines} setRoutines={setRoutines} />}
        />
        <Route
          path="/MyRoutines"
          element={
            <MyRoutines
              userRoutines={userRoutines}
              setUserRoutines={setUserRoutines}
            />
          }
        />
        <Route
          path="/Login"
          element={
            <Login
              token={token}
              setToken={setToken}
              username={username}
              setUsername={setUsername}
            />
          }
        />
        <Route
          path="/Login"
          element={
            <Login
              token={token}
              setToken={setToken}
              username={username}
              setUsername={setUsername}
            />
          }
        />

        <Route
          path="/Register"
          element={
            <Register
              token={token}
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
