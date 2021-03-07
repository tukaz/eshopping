import React from 'react'
import "./collection-item.styles.scss";

const CollectionItem = ({id,name,price,imageUrl}) => (
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
    </div>
)


export default CollectionItem;