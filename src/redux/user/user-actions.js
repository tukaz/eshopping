import UserActionTypes from './user-types'

export const setCurrentUser = (currentUser) => (
    { 
        type: UserActionTypes.SET_CURRENT_USER, 
        payload: currentUser 
    }
)

export const googleSignInStart = () => (
    { 
        type: UserActionTypes.GOOGLE_SIGN_IN_START, 
    }
)

export const googleSignInSuccess = user => (
    { 
        type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS, 
        payload: user
    }
)


export const googleSignInFailure = error => (
    { 
        type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE, 
        payload: error
    }
)

export const emailSignInStart = emailAndPassword => (
    { 
        type: UserActionTypes.GOOGLE_SIGN_IN_START, 
        payload: emailAndPassword
    }
)

export const emailSignInSuccess = user => (
    { 
        type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS, 
        payload: user
    }
)


export const emailSignInFailure = error => (
    { 
        type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE, 
        payload: error
    }
)