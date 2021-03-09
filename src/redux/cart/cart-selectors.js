import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.items
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.isCartHidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (items) => items.reduce((ac,item) => ac + item.q,0) 
)

export const selectCartItemsPrice = createSelector(
    [selectCartItems],
    (items) => items.reduce((ac,item) => ac + item.q * item.price,0) 
)