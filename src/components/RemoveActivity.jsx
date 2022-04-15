import React from "react";
import { useNavigate } from "react-router-dom";
import { removeRoutineActivity } from "../api";

const RemoveActivity = ({ activity, activitiesState, setActivitiesState }) => {
  // ================= Use Variables ==========
  let storedToken = localStorage.getItem("token");
  let navigate = useNavigate();

  // ================ Helper Functions =======
  const handleDelete = async () => {
    const applyActivity = async () => {
      try {
        removeRoutineActivity(storedToken, activity.routineActivityId);
        let filteredActivities = activitiesState.filter(
          (activityElement) => activityElement.id !== activity.id
        );
        console.log(filteredActivities);
        setActivitiesState(filteredActivities);
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
