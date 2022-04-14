import { BASE_URL } from ".";

export const addActivity = async (
  routineId,
  { activityId, count, duration }
) => {
  console.log("!!!!", activityId, count, duration, routineId);
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
