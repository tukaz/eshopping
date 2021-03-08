import {
    TOGGLE_SHOPPING_CART,
    ADD_ITEM
 } from './cart-types'


export const toggleShoppingCart = (isCartHidden) => (
    { type: TOGGLE_SHOPPING_CART, payload: isCartHidden }
)


export const addItem = (item) => (
    { type: ADD_ITEM, payload: item }
)

