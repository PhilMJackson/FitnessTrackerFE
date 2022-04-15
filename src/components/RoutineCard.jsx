import React, { useState } from "react";
import { ActivityCard, AddActivity, RemoveActivity } from ".";

const RoutineCard = ({
  routine,
  userRoutines,
  setUserRoutines,
  activities,
}) => {
  // ================= States =========
  const [routineState, setRoutineState] = useState(routine);
  const [activitiesState, setActivitiesState] = useState(routine.activities);
  // ================ Return =======
  // ================ Return =======
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
                  activity={activity}
                  activitiesState={activitiesState}
                  setActivitiesState={setActivitiesState}
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
        activitiesState={activitiesState}
        setActivitiesState={setActivitiesState}
      />
    </div>
  );
};

export default RoutineCard;
