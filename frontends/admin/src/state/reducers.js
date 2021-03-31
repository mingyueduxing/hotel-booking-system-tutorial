import { combineReducers } from "redux"
import hotel from "./hotel/reducer"
import login from "./login/reducer"
import users from "./users/reducer"

export default combineReducers({
  hotel,
  login,
  users
});
