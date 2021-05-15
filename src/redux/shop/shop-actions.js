import {
    REQUEST_COLLECTIONS_PENDING
} from './shop-types';

export const requestCollections = () => (dispatch) => {
    dispatch({ type: REQUEST_COLLECTIONS_PENDING, payload: null });
}



