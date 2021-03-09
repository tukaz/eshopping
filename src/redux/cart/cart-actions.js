import {
    TOGGLE_SHOPPING_CART,
    ADD_ITEM,
    REMOVE_ITEM,
    CLEAR_ITEM
 } from './cart-types'


export const toggleShoppingCart = (isCartHidden) => (
    { type: TOGGLE_SHOPPING_CART, payload: isCartHidden }
)


export const addItem = (item) => (
    { type: ADD_ITEM, payload: item }
)


export const clearItem = (item) => (
    { type: CLEAR_ITEM, payload: item }
)

export const removeItem = (item) => (
    { type: REMOVE_ITEM, payload: item }
)