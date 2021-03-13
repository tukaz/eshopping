import {
  REQUEST_COLLECTIONS_PENDING,
  REQUEST_COLLECTIONS_SUCCESS,
  REQUEST_COLLECTIONS_FAILED
} from './shop-types';

const INITIAL_STATE = {
  collections: {},
  isLoading: true
};


export const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
      case REQUEST_COLLECTIONS_PENDING:
        return Object.assign({}, state, {isLoading: true})
      case REQUEST_COLLECTIONS_SUCCESS:
        return Object.assign({}, state, {collections: action.payload, isLoading: false})
      case REQUEST_COLLECTIONS_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
}