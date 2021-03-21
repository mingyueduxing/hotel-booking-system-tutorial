import { combineReducers } from "redux"
import hotel from "./hotel/reducer.js"
import images from "./images/reducer"

export default combineReducers({
  hotel,
  images
});
