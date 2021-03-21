import actionTypes from "./action-types";

export const initialState = {
  hotel: {},
  loading: false,
  err: null,
};

const hotel = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default hotel;
