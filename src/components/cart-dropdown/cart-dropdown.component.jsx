import React from 'react'

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart-selectors'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import "./cart-dropdown.styles.scss";
import {toggleShoppingCart} from '../../redux/cart/cart-actions'
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => {
    return {
        items : selectCartItems(state)
    }
}

const Cart = ({items,location,history,dispatch}) => {
    console.log(location,"match");
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                { 
                items.length ?
                    items.map(item => (
                        <CartItem key={item.id} {...item } />
                    )) :
                    <span className="error-message">No Items Selected</span>
                } 
                { 
                    location.pathname === '/checkout' 
                        ? 
                        <CustomButton onClick={()=>{
                            dispatch(toggleShoppingCart());
                            history.push('/shop')}}>GO TO SHOP</CustomButton> 
                        : 
                        <CustomButton onClick={()=>{
                            dispatch(toggleShoppingCart());
                            history.push('/checkout')}}>GO TO CHECKOUT</CustomButton>
                }
                
            </div>
        </div>
    )
}



export default withRouter(connect(mapStateToProps)(Cart))

