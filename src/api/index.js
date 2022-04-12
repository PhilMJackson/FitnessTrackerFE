// You can choose to import all your functions, and re-export them here
export const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

export { registerUser, loginUser, fetchUserRoutines } from "./users";
export { fetchRoutines } from "./routines";
