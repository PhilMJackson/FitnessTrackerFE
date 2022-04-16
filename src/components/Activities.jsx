import React from "react";
import { CreateActivity, ErrorHandler } from ".";

const Activities = ({
  activities,
  setActivities,
  isOpen,
  setIsOpen,
  error,
  setError,
}) => {
  const storedToken = localStorage.getItem("token");
  return (
    <>
      <h1>Activities</h1>
      {storedToken ? (
        <CreateActivity
          activities={activities}
          setActivities={setActivities}
          open={isOpen}
          setIsOpen={setIsOpen}
          error={error}
          setError={setError}
        />
      ) : null}
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

export default Activities;
