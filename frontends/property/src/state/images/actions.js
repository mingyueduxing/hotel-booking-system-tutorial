import actionTypes from './action-types'
import { fetchImages } from '../../api/images-api'

export const loadImages = params => dispatch => {
    dispatch(loadImagesRequested());
    fetchImages(params)
        .then(res => dispatch(loadImagesSucceeded(res)))
        .catch(err => dispatch(loadImagesFailed(err)));
};

const loadImagesRequested = () => ({
    type: actionTypes.LOAD_IMAGES_REQUESTED
});

const loadImagesSucceeded = res => ({
    type: actionTypes.LOAD_IMAGES_SUCCEEDED,
    data: { images: res }
});

const loadImagesFailed = error => ({
    type: actionTypes.LOAD_IMAGES_FAILED,
    data: { error }
});