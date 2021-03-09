import { userReducer } from './user/user-reducer';
import { cartReducer } from './cart/cart-reducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
  };


const rootReducer = combineReducers(
    {
        user: userReducer,
        cart: cartReducer
    }
)

const persistedReducer = persistReducer(persistConfig, rootReducer)



export default persistedReducer;