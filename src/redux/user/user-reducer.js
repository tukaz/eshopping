import UserActionTypes from './user-types'

  const initialStateUser = {
    currentUser: null
  }
  
  export const userReducer = (state=initialStateUser, action={}) => {
    switch (action.type) {
      case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
      case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
        return { 
          ...state, 
          currentUser: action.payload,
          error: null
        }
      case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
      case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
        return { 
          ...state, 
          error: action.payload
        }
      default:
        return state
    }
  }
  