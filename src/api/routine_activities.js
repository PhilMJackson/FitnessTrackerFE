import { BASE_URL } from ".";

export const attachActivity = async (
  routineId,
  { activityId, count, duration }
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activityId,
          count,
          duration,
        }),
      }
    );
    console.log(response);
    const data = await response.json();
    console.log("Created Post", data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateRoutineActivity = async (
  token,
  routineActivityId,
  { count, duration }
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          count,
          duration,
        }),
      }
    );
    console.log(response);
    const data = await response.json();
    console.log("Routine Updated", data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const removeRoutineActivity = async (token, routineActivityId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    const data = await response.json();
    console.log("Routine Updated", data);
    return data;
  } catch (error) {
    throw error;
  }
};
