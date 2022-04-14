import { useState } from "react";
import { UpdateRoutineActivity } from ".";

const ActivityCard = ({ routine, userRoutines, setUserRoutines, activity }) => {
  const [activityState, setActivityState] = useState(activity);
  return (
    <div className="activityCard">
      <div className="activityName" style={{ fontWeight: "bold" }}>
        {activityState.name}
      </div>
      <div className="description">{activityState.description}</div>
      {activityState.duration ? (
        <div className="duration" style={{ fontWeight: "bold" }}>
          Duration: {activityState.duration} min
        </div>
      ) : null}
      {activityState.count ? (
        <div className="count" style={{ fontWeight: "bold" }}>
          Count: {activityState.count} reps
        </div>
      ) : null}
      <UpdateRoutineActivity
        routine={routine}
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
        activity={activityState}
        setActivityState={setActivityState}
      />
    </div>
  );
};

export default ActivityCard;
