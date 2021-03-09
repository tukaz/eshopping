import persistedReducer from "./root-reducer";
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger';

const logger = createLogger() 

const middlewares = [logger]

const store = createStore(persistedReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store);

export {store,persistor}