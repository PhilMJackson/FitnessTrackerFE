import React from "react";

const MyRoutines = ({ userRoutines, setUserRoutines }) => {
  return (
    <>
      <h1> My Routines</h1>
      <div className="cardsField">
        {userRoutines.map((routine, i) => {
          return (
            <div className="routineCard" key={i}>
              <div className="name">{routine.name}</div>
              <div className="goal" style={{ fontWeight: "bold" }}>
                Goal:
                <div id="goal">{routine.goal}</div>
              </div>
              <div className="activities">
                {routine.activities.map((activity, i) => {
                  return (
                    <div className="activityCard" key={i}>
                      <div
                        className="activityName"
                        style={{ fontWeight: "bold" }}
                      >
                        {activity.name}
                      </div>
                      <div className="description">{activity.description}</div>
                      {activity.duration ? (
                        <div className="duration">{activity.duration}</div>
                      ) : null}
                      {activity.count ? (
                        <div className="count">{activity.count}</div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyRoutines;
