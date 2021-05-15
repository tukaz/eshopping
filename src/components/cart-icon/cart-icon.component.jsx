import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import "./cart-icon.styles.scss";
import { toggleShoppingCart } from "../../redux/cart/cart-actions";

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShoppingCart: () => dispatch(toggleShoppingCart()),
  };
};

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};

const CartIcon = ({ toggleShoppingCart, itemCount }) => (
  <div className="cart-icon" onClick={toggleShoppingCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
