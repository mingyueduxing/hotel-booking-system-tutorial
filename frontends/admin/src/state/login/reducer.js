import actionTypes from "./action-types";
import { setToken, getToken } from '../../service/session-storage'

export const initialState = {
    currentUser: {},
    token: '',
    loading: false,
    err: null,
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOGIN_SUCCEEDED:
            setToken(action.data.token)
            return {
                ...state,
                loading: false,
                currentUser: action.data.user,
                token: action.data.token
            }
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                err: action.data.err
            }
        default:
            return state;
    }
};

export default login;
