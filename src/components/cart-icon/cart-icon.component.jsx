import React from 'react'
import { connect } from 'react-redux';


import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import "./cart-icon.styles.scss";
import { toggleShoppingCart } from '../../redux/cart/cart-actions';

const mapDispatchToProps = (dispatch) => {
    return {
      toggleShoppingCart: () => dispatch(toggleShoppingCart()),
    }
  }

const CartIcon = ({toggleShoppingCart}) => (
    <div 
        className="cart-icon" 
        onClick={toggleShoppingCart}
    >
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

export default connect(null,mapDispatchToProps)(CartIcon)
