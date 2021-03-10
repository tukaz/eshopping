import React from 'react'
import {connect} from 'react-redux';
import "./collection.styles.scss";
import { selectCollectionFromUrlParam } from '../../redux/shop/shop-selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const Collection = ({collection}) => {
    return(
        <div className="collection-page">
            <h1 className="title">{collection.title.toUpperCase()}</h1>
            <div className="items">
                {
                    collection.items.map(item => (
                       <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => ({
    collection: selectCollectionFromUrlParam(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);