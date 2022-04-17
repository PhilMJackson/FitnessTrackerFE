import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const handleLogOut = async (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };

  return (
    <button onClick={handleLogOut} type="button">
      Logout
    </button>
  );
};

export default LogOut;
