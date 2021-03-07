import rootReducer from "./root-reducer";
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger() 

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;