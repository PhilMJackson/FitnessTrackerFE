import React from "react";

const Activities = ({ activities, setActivities }) => {
  return (
    <>
      <h1>Activities</h1>
      <div className="cardsField">
        {activities.map((activity, i) => {
          return (
            <div className="activityCard" key={i}>
              <div className="activityName" style={{ fontWeight: "bold" }}>
                {activity.name}
              </div>
              <div className="description">{activity.description}</div>
              {activity.duration ? (
                <div className="duration" style={{ fontWeight: "bold" }}>
                  Duration: {activity.duration} min
                </div>
              ) : null}
              {activity.count ? (
                <div className="count" style={{ fontWeight: "bold" }}>
                  Count: {activity.count} reps
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Activities;
