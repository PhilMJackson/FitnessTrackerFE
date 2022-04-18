import React from "react";
import { ActivityCard, AddActivity, RemoveActivity } from ".";
import DeleteRoutine from "./DeleteRoutine";
import UpdateRoutine from "./UpdateRoutine";

const RoutineCard = ({
  routine,
  userRoutines,
  setUserRoutines,
  activities,
}) => {
  // ================ Return =======
  // ================ Return =======
  return (
    <div className="routineCard">
      <div className="name">{routine.name}</div>
      <div className="goal" style={{ fontWeight: "bold" }}>
        Goal:
        <div id="goal">{routine.goal}</div>
      </div>
      <UpdateRoutine
        routine={routine}
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
      />
      <DeleteRoutine
        routine={routine}
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
      />
      <div className="activitiesContainer">
        <div className="activityContainerTitle" style={{ fontWeight: "bold" }}>
          Activities:
        </div>
        {routine.activities && routine.activities.length
          ? routine.activities.map((activity, i) => {
              return (
                <ActivityCard
                  activity={activity}
                  routine={routine}
                  userRoutines={userRoutines}
                  setUserRoutines={setUserRoutines}
                  key={("activity", i)}
                />
              );
            })
          : null}
      </div>
      <AddActivity
        routine={routine}
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
        activities={activities}
      />
    </div>
  );
};

export default RoutineCard;
