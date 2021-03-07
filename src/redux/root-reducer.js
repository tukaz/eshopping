import { setCurrentUser } from './user/user-reducer'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({setCurrentUser})

export default rootReducers;