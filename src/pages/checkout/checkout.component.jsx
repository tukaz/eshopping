import React from 'react'

import {connect} from 'react-redux';
import {selectCartItems,selectCartItemsPrice} from '../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import "./checkout.styles.scss";

const Checkout = ({items,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            items.map(item => (
                <CheckoutItem key={item.id} item={item}/>
            ))
        }
        <div className="total"><span>Total: </span>{total}</div>        
    </div>
)


const mapStateToProps = createStructuredSelector(
        {
            items : selectCartItems,
            total : selectCartItemsPrice
        }
)

export default connect(mapStateToProps)(Checkout)
