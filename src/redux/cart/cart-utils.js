
export const addItemToCart = (cartItems,cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, q: cartItem.q + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, q: 1 }];
  
}

export const removeCartItem =  (cartItems,item) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === item.id
  );

  if (existingCartItem.q === 1) {
    return cartItems.filter(cartItem => cartItem.id !== item.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === item.id
      ? { ...cartItem, q: cartItem.q - 1 }
      : cartItem
  );
}

  