import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({name,imageUrl,price,q}) => (
    <div className="cart-item">
        <img src={imageUrl} alt='img'/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="quantity">{q} x ${price}</span>
        </div>
    </div>
)

export default CartItem;
