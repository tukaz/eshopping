import {
    SET_CURRENT_USER
   } from '../constants';
  
  const initialStateUser = {
    currentUser: null
  }
  
  export const setCurrentUser = (state=initialStateUser, action={}) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return { ...state, currentUser: action.payload}
      default:
        return state
    }
  }
  