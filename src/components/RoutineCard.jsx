import React, { useState } from "react";
import { ActivityCard, AddActivity } from ".";

const RoutineCard = ({
  routine,
  userRoutines,
  setUserRoutines,
  activities,
}) => {
  const [routineState, setRoutineState] = useState(routine);
  return (
    <div className="routineCard">
      <div className="name">{routine.name}</div>
      <div className="goal" style={{ fontWeight: "bold" }}>
        Goal:
        <div id="goal">{routine.goal}</div>
      </div>
      <div className="activitiesContainer">
        <div className="activityContainerTitle" style={{ fontWeight: "bold" }}>
          Activities:
        </div>
        {routine.activities && routine.activities.length
          ? routine.activities.map((activity, i) => {
              return (
                <ActivityCard
                  routine={routineState}
                  userRoutines={userRoutines}
                  setUserRoutines={setUserRoutines}
                  activity={activity}
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
