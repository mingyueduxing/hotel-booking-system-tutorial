import actionTypes from './action-types'
import { fetchHotel } from '../../api/hotel-api'

export const loadHotel = params => dispatch => {
    dispatch(loadHotelRequested());
    fetchHotel(params)
        .then(res => dispatch(loadHotelSucceeded(res)))
        .catch(err => dispatch(loadHotelFailed(err)));
};

const loadHotelRequested = () => ({
    type: actionTypes.LOAD_HOTEL_REQUESTED
});

const loadHotelSucceeded = res => ({
    type: actionTypes.LOAD_HOTEL_SUCCEEDED,
    data: { hotel: res }
});

const loadHotelFailed = error => ({
    type: actionTypes.LOAD_HOTEL_FAILED,
    data: { error }
});