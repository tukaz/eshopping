import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({name,imageUrl,q}) => (
    <div className="cart-item">
        <img src={imageUrl} alt='img'/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="quantity">{q}</span>
        </div>
    </div>
)

export default CartItem;
