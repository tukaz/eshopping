import React from 'react'
import "./collection-item.styles.scss";
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import {addItem,toggleShoppingCart} from '../../redux/cart/cart-actions'

const CollectionItem = ({item,addItem,toggleShoppingCart}) => {
    const {name,price,imageUrl} = item
    return(
        <div className="item-wrapper">
            <div 
                className="item-image" 
                style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="item-footer">
                <span className="item-name">
                    {name}
                </span>
                <span className="item-price">
                    {price}
                </span>
            </div>
            <CustomButton onClick={()=>{toggleShoppingCart();addItem(item)}} inverted>Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      addItem: (item) => dispatch(addItem(item)),
      toggleShoppingCart: () =>  dispatch(toggleShoppingCart(false)),
    }
  }
  
export default connect(null,mapDispatchToProps)(CollectionItem)
