import {
    TOGGLE_SHOPPING_CART
 } from './cart-types'


export const toggleShoppingCart = (isCartHidden) => (
    { type: TOGGLE_SHOPPING_CART, payload: isCartHidden }
)
