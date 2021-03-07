import { userReducer } from './user/user-reducer';
import { cartReducer } from './cart/cart-reducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers(
    {
        user: userReducer,
        cart: cartReducer
    }
)

export default rootReducers;