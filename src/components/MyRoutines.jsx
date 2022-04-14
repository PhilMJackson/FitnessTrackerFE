import React, { useEffect, useState } from "react";
import { fetchUserRoutines } from "../api";
import { CreateRoutine, AddActivity, UpdateRoutineActivity } from ".";
import { RoutineCard } from ".";
const MyRoutines = ({ activities, username, token }) => {
  // ================= Use Variables ==========
  let initialFormState = { activityId: "", count: "", duration: "" };
  let storedToken = localStorage.getItem("token");

  // ================= States =========
  const [userRoutines, setUserRoutines] = useState([]);

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
          return (
            <RoutineCard
              routine={routine}
              userRoutines={userRoutines}
              setUserRoutines={setUserRoutines}
              activities={activities}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default MyRoutines;
