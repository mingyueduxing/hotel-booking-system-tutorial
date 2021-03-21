import actionTypes from "./action-types";

export const initialState = {
  hotel: {},
  loading: false,
  error: null,
};

const hotel = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_HOTEL_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.LOAD_HOTEL_SUCCEEDED:
      return {
        ...state,
        loading: false,
        hotel: action.data.hotel
      }
    case actionTypes.LOAD_HOTEL_FAILED:
      return {
        ...state,
        loading: false,
        error: action.data.error
      }
    default:
      return state;
  }
};

export default hotel;
