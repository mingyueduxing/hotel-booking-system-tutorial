import actionTypes from "./action-types";

export const initialState = {
  rooms: [],
  loading: false,
  error: null,
};

const rooms = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ROOMS_REQUESTED:
        return {
          ...state,
          loading: true,
        }
      case actionTypes.LOAD_ROOMS_SUCCEEDED:
        return {
          ...state,
          loading: false,
          rooms: action.data.rooms
        }
      case actionTypes.LOAD_ROOMS_FAILED:
        return {
          ...state,
          loading: false,
          error: action.data.error
        }
    default:
      return state;
  }
};

export default rooms;
