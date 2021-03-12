import {
    SET_COLLECTIONS
} from './shop-types';

export const updateCollections = (collections) => (
    { type: SET_COLLECTIONS, payload: collections }
)

