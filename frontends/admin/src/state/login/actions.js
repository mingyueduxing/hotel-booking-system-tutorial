import actionTypes from './action-types'
import loginAsync from '../../api/login-api'

export const loginAction = params => dispatch => {
    dispatch(loginRequested());
    return loginAsync(params)
        .then(res => {
            return dispatch(loginSucceeded(res))}
        )
        .catch(err => dispatch(loginFailed(err)));
};

const loginRequested = () => ({
    type: actionTypes.LOGIN_REQUESTED
});

const loginSucceeded = res => {
    return ({
        type: actionTypes.LOGIN_SUCCEEDED,
        data: res.data
    })
}

const loginFailed = err => ({
    type: actionTypes.LOGIN_FAILED,
    data: { err }
});