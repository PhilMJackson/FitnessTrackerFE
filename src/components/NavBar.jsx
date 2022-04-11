import React from "react";
import { Link } from "react-router-dom";
import { LogOut } from ".";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="lnk">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/Routines">
          Routines
        </Link>
        {localStorage.getItem("token") ? (
          <Link className="link" to="/MyRoutines">
            My Routines
          </Link>
        ) : null}
        <Link className="link" to="/Activities">
          Activities
        </Link>
      </div>
      <h1>Fitness Tracker</h1>
      {!localStorage.getItem("token") ? (
        <div className="btn">
          <Link className="log" to="/Login">
            <button type="button">Login</button>
          </Link>
          <Link className="log" to="/Register">
            <button type="button">Register</button>
          </Link>
        </div>
      ) : (
        <div className="btn">
          <Link className="log" to="/LogOut">
            <LogOut />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
