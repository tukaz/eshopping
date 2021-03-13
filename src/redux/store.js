import persistedReducer from "./root-reducer";
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger() 

const middlewares = [];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger);
    middlewares.push(thunkMiddleware);
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store);

export {store,persistor}