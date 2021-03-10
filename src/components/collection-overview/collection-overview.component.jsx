import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop-selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import "./collection-overview.styles.scss";
const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {
          Object.keys(collections).map((collection) => {
            return <CollectionPreview key={collections[collection].id} {...collections[collection]}/>
          })

        }
    </div>

)

const mapStateToProps = createStructuredSelector(
  {
    collections: selectCollections
  }
)

 
export default connect(mapStateToProps)(CollectionOverview);
