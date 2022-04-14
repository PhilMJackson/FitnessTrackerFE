import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateRoutineActivity, fetchActivity } from "../api";

const UpdateRoutineActivity = ({
  routine,
  userRoutines,
  setUserRoutines,
  activity,
  setActivityState,
}) => {
  // ================= Use Variables ==========
  let initialUpdateFormState = { count: "", duration: "" };
  let storedToken = localStorage.getItem("token");
  let navigate = useNavigate();

  // ================= States =========
  const [updateFormState, setUpdateFormState] = useState(
    initialUpdateFormState
  );

  // ================ Helper Functions =======
  const updateForm = (event) => {
    setUpdateFormState({
      ...updateFormState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const applyActivity = async () => {
      try {
        const result = await updateRoutineActivity(
          storedToken,
          activity.routineActivityId,
          updateFormState
        );
        setActivityState({
          ...activity,
          count: result.count,
          duration: result.duration,
        });
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setUpdateFormState(initialUpdateFormState);
        navigate("/MyRoutines");
      }
    };
    applyActivity();
  };

  // ================ Return =======
  // ================ Return =======
  return (
    <form className="updateRoutineActivity" onSubmit={handleSubmit}>
      <input
        className="duration"
        type="text"
        name="duration"
        placeholder="duration"
        value={
          updateFormState.duration === null || undefined
            ? activity.duration
            : updateFormState.duration
        }
        onChange={updateForm}
      />
      <input
        className="count"
        type="text"
        name="count"
        placeholder="count"
        value={
          updateFormState.count === null || undefined
            ? activity.count
            : updateFormState.count
        }
        onChange={updateForm}
      />
      <div className="cardBtn">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UpdateRoutineActivity;
