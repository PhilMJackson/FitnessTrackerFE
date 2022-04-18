import React, { useEffect, useState } from "react";
import { fetchUserRoutines } from "../api";
import { CreateRoutine, RoutineCard, ErrorHandler } from ".";
const MyRoutines = ({ activities, isOpen, setIsOpen, error, setError }) => {
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
      <h1 id="Header"> My Routines</h1>
      <CreateRoutine
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
        activities={activities}
        error={error}
        setError={setError}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="cardsField">
        {userRoutines.map((routine, i) => {
          return (
            <RoutineCard
              routine={routine}
              userRoutines={userRoutines}
              setUserRoutines={setUserRoutines}
              activities={activities}
              error={error}
              setError={setError}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              key={i}
            />
          );
        })}
      </div>
      {error.error ? (
        <ErrorHandler
          name={error.name}
          message={error.message}
          open={isOpen}
          setIsOpen={setIsOpen}
          setError={setError}
        />
      ) : null}
    </>
  );
};

export default MyRoutines;
