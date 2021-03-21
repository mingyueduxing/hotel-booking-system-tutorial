import actionTypes from './action-types'
import { fetchRooms } from '../../api/rooms-api'

export const loadRooms = params => dispatch => {
    dispatch(loadRoomsRequested());
    fetchRooms(params)
        .then(res => dispatch(loadRoomsSucceeded(res)))
        .catch(err => dispatch(loadRoomsFailed(err)));
};

const loadRoomsRequested = () => ({
    type: actionTypes.LOAD_ROOMS_REQUESTED
});

const loadRoomsSucceeded = res => ({
    type: actionTypes.LOAD_ROOMS_SUCCEEDED,
    data: { rooms: res }
});

const loadRoomsFailed = error => ({
    type: actionTypes.LOAD_ROOMS_FAILED,
    data: { error }
});