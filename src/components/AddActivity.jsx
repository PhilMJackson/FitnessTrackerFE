//filter out already applied activities
import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchActivity, addActivity } from "../api";

const AddActivity = ({
  routine,
  userRoutines,
  setUserRoutines,
  activities,
  formState,
  initialFormState,
  setFormState,
  updateForm,
  updateFormActivityId,
}) => {
  let navigate = useNavigate();

  return (
    <form
      className="postCard"
      onSubmit={(e) => {
        e.preventDefault();
        const applyActivity = async () => {
          try {
            const result = await addActivity(routine.id, formState);

            if (result.id) {
              const updatedRoutineActivities = [...routine.activities];
              updatedRoutineActivities.unshift(
                fetchActivity(result.activityId)
              );
              const updatedRoutineObj = { ...routine };
              updatedRoutineObj.activities = updatedRoutineActivities;
              const filteredRoutines = userRoutines.filter((element) => {
                return element.id !== routine.id;
              });
              setUserRoutines([updatedRoutineObj, ...filteredRoutines]);
            }
          } catch (error) {
            console.error("Error: ", error);
          } finally {
            setFormState(initialFormState);
            navigate("/MyRoutines");
          }
        };
        applyActivity();
      }}
    >
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
          value={formState.duration}
          onChange={updateForm}
        />
        <input
          className="count"
          type="text"
          name="count"
          placeholder="count"
          value={formState.count}
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
