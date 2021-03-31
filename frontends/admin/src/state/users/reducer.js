import actionTypes from "./action-types";

export const initialState = {
    users: {},
    loading: false,
    err: null,
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOAD_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.data
            }
        case actionTypes.LOAD_USERS_FAILED:
            return {
                ...state,
                loading: false,
                err: action.data.err
            }
        default:
            return state;
    }
};

export default users;
