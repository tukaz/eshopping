import {
    TOGGLE_SHOPPING_CART
   } from './cart-types';
  
  const initialStateCart = {
    isCartHidden: true
  }
  
  export const cartReducer = (state=initialStateCart, action={}) => {
    switch (action.type) {
      case TOGGLE_SHOPPING_CART:
        return { ...state, isCartHidden: !state.isCartHidden}
      default:
        return state
    }
  }
  