import React from 'react'
import "./collection-item.styles.scss";
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart-actions'

const mapDispatchToProps = (dispatch) => {
    return {
      addItem: (item) => dispatch(addItem(item)),
    }
  }


const CollectionItem = ({item,addItem}) => {
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
            <CustomButton onClick={()=>addItem(item)} inverted>Add to Cart</CustomButton>
        </div>
    )
}

export default connect(null,mapDispatchToProps)(CollectionItem)
