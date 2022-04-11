import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar, Register } from ".";

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
  });

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/Register">
          <Register setToken={setToken} />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
