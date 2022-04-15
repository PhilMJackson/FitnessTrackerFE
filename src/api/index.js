// You can choose to import all your functions, and re-export them here
export const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

export { registerUser, loginUser, fetchUserRoutines } from "./users";
export {
  fetchRoutines,
  newRoutine,
  editRoutine,
  deleteRoutine,
} from "./routines";
export { fetchActivities, fetchActivity, newActivity } from "./activities";
export {
  attachActivity,
  updateRoutineActivity,
  removeRoutineActivity,
} from "./routine_activities";
