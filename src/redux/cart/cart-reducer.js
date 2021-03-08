import {
    TOGGLE_SHOPPING_CART,
    ADD_ITEM
   } from './cart-types';

import {mergeCartItems} from './cart-utils';

  const initialStateCart = {
    isCartHidden: true,
    items: []  
  }

  
  export const cartReducer = (state=initialStateCart, action={}) => {
    
    switch (action.type) {
      case TOGGLE_SHOPPING_CART:
        return { ...state, isCartHidden: !state.isCartHidden};
      case ADD_ITEM:
        return { 
          ...state, 
          items: mergeCartItems(state.items,action.payload)
        }
      default:
        return state
    }
  }
  