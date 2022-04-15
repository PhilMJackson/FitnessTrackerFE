import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newActivity } from "../api";

const CreateActivity = ({ activities, setActivities }) => {
  // ================= Use Variables ==========
  let navigate = useNavigate();
  let initialActivityFormState = { name: "", description: "" };
  let storedToken = localStorage.getItem("token");

  // ================= States =========
  const [activityFormState, setActivityFormState] = useState(
    initialActivityFormState
  );

  // ================ Helper Functions =======
  const updateForm = (event) => {
    setActivityFormState({
      ...activityFormState,
      [event.target.name]: event.target.value,
    });
  };

  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await newActivity(storedToken, activityFormState);
      setActivities([result, ...activities]);
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setActivityFormState(initialActivityFormState);
      navigate("/Activities");
    }
  };

  // ================ Return =======
  // ================ Return =======
  return (
    <div>
      <h3>Create Activity</h3>
      <form className="postCard" onSubmit={userSubmit}>
        <input
          className="activityName"
          type="text"
          name="name"
          placeholder="name"
          value={activityFormState.name}
          onChange={updateForm}
        ></input>
        <input
          className="description"
          type="text"
          name="description"
          placeholder="description"
          value={activityFormState.description}
          onChange={updateForm}
        ></input>

        <div className="cardBtn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateActivity;
