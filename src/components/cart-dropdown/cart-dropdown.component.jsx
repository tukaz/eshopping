import React from 'react'

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart-selectors'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import "./cart-dropdown.styles.scss";

const mapStateToProps = state => {
    return {
        items : selectCartItems(state)
    }
}

const Cart = ({items}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                { items.map(item => (
                    <CartItem key={item.id} {...item } />
                ))}
                <CustomButton >GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}



export default connect(mapStateToProps)(Cart)

