import {
    SET_CURRENT_USER
 } from './user-types'


export const setCurrentUser = (currentUser) => (
    { type: SET_CURRENT_USER, payload: currentUser }
)
