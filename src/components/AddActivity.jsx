//filter out already applied activities
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { attachActivity } from "../api";

const AddActivity = ({
  routine,
  activities,
  activitiesState,
  setActivitiesState,
}) => {
  // ================= Use Variables ==========
  let navigate = useNavigate();
  let initialAddFormState = { activityId: "", count: "", duration: "" };

  // ================= States =========
  const [addFormState, setAddFormState] = useState(initialAddFormState);

  // ================ Helper Functions =======
  const updateForm = (event) => {
    setAddFormState({
      ...addFormState,
      [event.target.name]: event.target.value,
    });
  };

  const updateFormActivityId = (event) => {
    console.log(event.target);
    setAddFormState({ ...addFormState, activityId: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const applyActivity = async () => {
      try {
        console.log("!!!!!!!", routine.id, addFormState);
        const result = await attachActivity(routine.id, addFormState);
        setActivitiesState([result, ...activitiesState]);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setAddFormState(initialAddFormState);
        navigate("/MyRoutines");
      }
    };
    applyActivity();
  };

  // ================ Return =======
  // ================ Return =======
  return (
    <form className="postCard" onSubmit={handleSubmit}>
      <div className="activities">
        <select
          name="activities"
          id="select"
          autoComplete="off"
          placeholder="select"
          onChange={updateFormActivityId}
        >
          {activities.map((activity, i) => {
            return (
              <option
                className="activityName"
                key={("dropdown", i)}
                style={{ fontWeight: "bold" }}
                name="activity"
                value={activity.id}
              >
                {activity.name}
              </option>
            );
          })}
        </select>
        <input
          className="duration"
          type="text"
          name="duration"
          placeholder="duration"
          value={addFormState.duration}
          onChange={updateForm}
        />
        <input
          className="count"
          type="text"
          name="count"
          placeholder="count"
          value={addFormState.count}
          onChange={updateForm}
        />
        <div className="cardBtn">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default AddActivity;
