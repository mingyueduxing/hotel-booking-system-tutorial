import actionTypes from './action-types'
import fetchUsers from '../../api/users-api'

export const loadUsers = params => dispatch => {
    dispatch(loadUsersRequested());
    return fetchUsers(params)
        .then(res => dispatch(loadUsersSucceeded(res)))
        .catch(err => dispatch(loadUsersFailed(err)));
};

const loadUsersRequested = () => ({
    type: actionTypes.LOAD_USERS_REQUESTED
});

const loadUsersSucceeded = res => {
    return ({
        type: actionTypes.LOAD_USERS_SUCCEEDED,
        data: res.data
    })
}

const loadUsersFailed = err => ({
    type: actionTypes.LOAD_USERS_FAILED,
    data: { err }
});