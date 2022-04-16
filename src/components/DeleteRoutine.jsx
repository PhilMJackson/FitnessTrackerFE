import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteRoutine } from "../api";

const DeleteRoutine = ({ routine, userRoutines, setUserRoutines }) => {
  // ================= Use Variables ==========
  let storedToken = localStorage.getItem("token");
  let navigate = useNavigate();

  // ================ Helper Functions =======
  const handleDelete = async () => {
    const removeRoutine = async () => {
      try {
        const result = await deleteRoutine(storedToken, routine.id);
        const filteredRoutines = userRoutines.filter(
          (routineElement) => routineElement.id !== result.id
        );
        setUserRoutines(filteredRoutines);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        navigate("/MyRoutines");
      }
    };
    removeRoutine();
  };

  // ================ Return =======
  // ================ Return =======
  return (
    <div className="cardBtn">
      <button type="button" className="deleteButton" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteRoutine;
