import actionTypes from "./action-types";

export const initialState = {
  images: [],
  loading: false,
  error: null,
};

const images = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_IMAGES_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.LOAD_IMAGES_SUCCEEDED:
      return {
        ...state,
        loading: false,
        images: action.data.images
      }
    case actionTypes.LOAD_IMAGES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.data.error
      }
    default:
      return state;
  }
};

export default images;
