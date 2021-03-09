import React from 'react'
import {clearItem,addItem,removeItem} from '../../redux/cart/cart-actions';
import {connect} from 'react-redux';
import "./checkout-item.styles.scss";

const ChekoutItem = ({item,clearItem,addItem,removeItem}) => {

    const { name, imageUrl, price, q } = item;

    return(
        <div key={item.id} className="checkout-item">
            <div className="item-block">
                <span><img src={imageUrl} alt="img"/></span>
            </div>
            <div className="item-block">
                <span>{name}</span>
            </div>
            <div className="item-block">
                <span onClick={()=>removeItem(item)} className="arrow">&#10094;</span>
                    <span className="quantity">{q}</span>
                <span onClick={()=>addItem(item)} className="arrow">&#10095;</span>
            </div>
            <div className="item-block">
                <span>{price}</span>
            </div>
            <div className="item-block">
                <span onClick={()=>clearItem(item)}>&#10060;</span>
            </div>
        </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        clearItem : (item) => dispatch(clearItem(item)),
        addItem : (item) => dispatch(addItem(item)),
        removeItem : (item) => dispatch(removeItem(item)),
    }
}
export default connect(null,mapDispatchToProps)(ChekoutItem)
