import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editRoutine } from "../api";

const UpdateRoutine = ({ routine, userRoutines, setUserRoutines }) => {
  // ================= Use Variables ==========
  let initialUpdateRoutineFormState = { name: "", goal: "" };
  let storedToken = localStorage.getItem("token");
  let navigate = useNavigate();

  // ================= States =========
  const [updateRoutineFormState, setUpdateRoutineFormState] = useState(
    initialUpdateRoutineFormState
  );

  // ================ Helper Functions =======
  const updateForm = (event) => {
    setUpdateRoutineFormState({
      ...updateRoutineFormState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const applyRoutine = async () => {
      try {
        const result = await editRoutine(
          storedToken,
          routine.id,
          updateRoutineFormState
        );
        const newRoutine = {
          ...routine,
          name: result.name,
          goal: result.goal,
        };
        const filteredRoutines = userRoutines.filter(
          (routineElement) => routineElement.id !== routine.id
        );
        const newRoutines = [newRoutine, ...filteredRoutines];
        setUserRoutines(newRoutines);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setUpdateRoutineFormState(initialUpdateRoutineFormState);
        navigate("/MyRoutines");
      }
    };
    applyRoutine();
  };

  // ================ Return =======
  // ================ Return =======
  return (
    <form className="updateRoutineActivity" onSubmit={handleSubmit}>
      <input
        className="routineName"
        type="text"
        name="name"
        placeholder="name"
        value={
          updateRoutineFormState.name === null || undefined
            ? routine.name
            : updateRoutineFormState.name
        }
        onChange={updateForm}
      />
      <input
        className="goal"
        type="text"
        name="goal"
        placeholder="goal"
        value={
          updateRoutineFormState.goal === null || undefined
            ? routine.goal
            : updateRoutineFormState.goal
        }
        onChange={updateForm}
      />
      <div className="cardBtn">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default UpdateRoutine;
