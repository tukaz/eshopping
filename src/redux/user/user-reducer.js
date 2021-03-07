import {
    SET_CURRENT_USER
   } from './user-types';
  
  const initialStateUser = {
    currentUser: null
  }
  
  export const userReducer = (state=initialStateUser, action={}) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return { ...state, currentUser: action.payload}
      default:
        return state
    }
  }
  