import actionTypes from './action-types'

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
    data: { Hotel: res.data.Search || [] }
});

const loadHotelFailed = err => ({
    type: actionTypes.LOAD_HOTEL_FAILED,
    data: { err }
});