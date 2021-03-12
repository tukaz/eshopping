import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import "./collection-overview.styles.scss";
const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {
          collections.map((collection) => {
            return <CollectionPreview key={collection.id} {...collection}/>
          })

        }
    </div>

)

const mapStateToProps = createStructuredSelector(
  {
    collections: selectCollectionsForPreview
  }
)

 
export default connect(mapStateToProps)(CollectionOverview);
