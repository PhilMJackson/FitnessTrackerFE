import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserRoutines, addActivity, fetchActivity } from "../api";
import { CreateRoutine, AddActivity } from ".";

const MyRoutines = ({ activities, username, token }) => {
  // ================= Use Variables ==========
  let navigate = useNavigate();
  let initialFormState = { activityId: "", count: "", duration: "" };
  let storedToken = localStorage.getItem("token");

  // ================= States =========
  const [userRoutines, setUserRoutines] = useState([]);
  const [formState, setFormState] = useState(initialFormState);

  // ================ Effects =======
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    const storedToken = localStorage.getItem("token");
    const getUserRoutines = async () => {
      const allUserRoutines = await fetchUserRoutines(storedUser, storedToken);
      if (allUserRoutines.length) {
        setUserRoutines(allUserRoutines.reverse());
      } else return;
    };
    getUserRoutines();
  }, []);

  // ================ Helper Functions =======
  const updateForm = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const updateFormActivityId = (event) => {
    console.log(event.target);
    setFormState({ ...formState, activityId: event.target.value });
  };

  // const userSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const result = await addActivity(userRoutine.id, formState);
  //     if (result.id) {
  //       setUserRoutines([result, ...userRoutines]);
  //     }
  //   } catch (error) {
  //     console.error("Error: ", error);
  //   } finally {
  //     setFormState(initialFormState);
  //     navigate("/MyRoutines");
  //   }
  // };

  // ================ Return =======
  // ================ Return =======
  return (
    <>
      <h1> My Routines</h1>
      <CreateRoutine
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
        activities={activities}
      />
      <div className="cardsField">
        {userRoutines.map((routine, i) => {
          console.log("Routine", routine);
          return (
            <div className="routineCard" key={i}>
              <div className="name">{routine.name}</div>
              <div className="goal" style={{ fontWeight: "bold" }}>
                Goal:
                <div id="goal">{routine.goal}</div>
              </div>
              <div className="activities">
                {routine.activities && routine.activities.length
                  ? routine.activities.map((activity, i) => {
                      return (
                        <div className="activityCard" key={("activity", i)}>
                          <div
                            className="activityName"
                            style={{ fontWeight: "bold" }}
                          >
                            {activity.name}
                          </div>
                          <div className="description">
                            {activity.description}
                          </div>
                          {activity.duration ? (
                            <div className="duration">{activity.duration}</div>
                          ) : null}
                          {activity.count ? (
                            <div className="count">{activity.count}</div>
                          ) : null}
                        </div>
                      );
                    })
                  : null}
              </div>
              <AddActivity
                routine={routine}
                userRoutines={userRoutines}
                setUserRoutines={setUserRoutines}
                activities={activities}
                formState={formState}
                initialFormState={initialFormState}
                setFormState={setFormState}
                updateForm={updateForm}
                updateFormActivityId={updateFormActivityId}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyRoutines;
