import { combineReducers } from "redux"
import hotel from "./hotel/reducer"
import images from "./images/reducer"
import rooms from "./rooms/reducer"

export default combineReducers({
  hotel,
  images,
  rooms,
});
