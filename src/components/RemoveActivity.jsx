import React from "react";
import { useNavigate } from "react-router-dom";
import { removeRoutineActivity } from "../api";

const RemoveActivity = ({
  activity,
  routine,
  userRoutines,
  setUserRoutines,
}) => {
  // ================= Use Variables ==========
  let storedToken = localStorage.getItem("token");
  let navigate = useNavigate();

  // ================ Helper Functions =======
  const handleDelete = async () => {
    const applyActivity = async () => {
      try {
        const result = await removeRoutineActivity(
          storedToken,
          activity.routineActivityId
        );
        const filteredActivities = routine.activities.filter(
          (activityElement) => activityElement.id !== result.activityId
        );
        const newRoutine = (routine.activities = filteredActivities);
        const newUserRoutines = userRoutines.filter(
          (routineElement) => routineElement.id !== newRoutine.id
        );
        setUserRoutines(newUserRoutines);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        navigate("/MyRoutines");
      }
    };
    applyActivity();
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

export default RemoveActivity;
