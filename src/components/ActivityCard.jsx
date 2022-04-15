import { useState } from "react";
import { UpdateRoutineActivity, RemoveActivity } from ".";

const ActivityCard = ({ activity, activitiesState, setActivitiesState }) => {
  // ================= States =========
  const [activityState, setActivityState] = useState(activity);

  // ================ Return =======
  // ================ Return =======
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
        activity={activityState}
        setActivityState={setActivityState}
      />
      <RemoveActivity
        activity={activityState}
        activitiesState={activitiesState}
        setActivitiesState={setActivitiesState}
      />
    </div>
  );
};

export default ActivityCard;
