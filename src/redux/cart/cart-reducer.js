import {
    TOGGLE_SHOPPING_CART,
    ADD_ITEM,
    REMOVE_ITEM,
    CLEAR_ITEM
   } from './cart-types';

import {
    addItemToCart,
    removeCartItem
  } from './cart-utils';

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
          items: addItemToCart(state.items,action.payload)
        }
      case CLEAR_ITEM:
        return { 
          ...state, 
          items: state.items.filter(
            cartItem => cartItem.id !== action.payload.id
          )
        }
      case REMOVE_ITEM:
        return { 
          ...state, 
          items: removeCartItem(state.items,action.payload)
        }
      default:
        return state
    }
  }
  