import persistedReducer from "./root-reducer";
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/root-saga';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger() 

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger);
    middlewares.push(thunkMiddleware);

}

const store = createStore(persistedReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store,persistor}