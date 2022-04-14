import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newRoutine } from "../api";

const CreateRoutine = ({ userRoutines, setUserRoutines }) => {
  // ================= Use Variables ==========
  let navigate = useNavigate();
  let initialFormState = { name: "", goal: "", isPublic: true };
  let storedToken = localStorage.getItem("token");

  // ================= States =========
  const [formState, setFormState] = useState(initialFormState);

  // ================ Helper Functions =======
  const updateForm = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await newRoutine(
        storedToken,
        formState.name,
        formState.goal,
        formState.isPublic
      );
      if (result.id) {
        setUserRoutines([result, ...userRoutines]);
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setFormState(initialFormState);
      navigate("/MyRoutines");
    }
  };

  // ================ Return =======
  // ================ Return =======
  return (
    <div>
      <h3>Create Routine</h3>
      <form className="postCard" onSubmit={userSubmit}>
        <input
          className="routineName"
          type="text"
          name="name"
          placeholder="name"
          value={formState.name}
          onChange={updateForm}
        ></input>
        <input
          className="goal"
          type="text"
          name="goal"
          placeholder="goal"
          value={formState.goal}
          onChange={updateForm}
        ></input>

        <div className="cardBtn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoutine;
