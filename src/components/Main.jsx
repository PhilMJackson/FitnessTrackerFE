import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  NavBar,
  Home,
  Register,
  Login,
  Routines,
  MyRoutines,
  Activities,
} from ".";
import { fetchRoutines, fetchActivities } from "../api";

const Main = () => {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
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
    const getActivities = async () => {
      const allActivities = await fetchActivities();
      if (allActivities.length) {
        setActivities(allActivities.reverse());
      } else return;
    };
    getActivities();
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
              activities={activities}
              username={username}
              token={token}
              error={error}
              setError={setError}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          }
        />
        <Route
          path="/Activities"
          element={
            <Activities
              activities={activities}
              setActivities={setActivities}
              error={error}
              setError={setError}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
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
              error={error}
              setError={setError}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
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
              error={error}
              setError={setError}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Main;
