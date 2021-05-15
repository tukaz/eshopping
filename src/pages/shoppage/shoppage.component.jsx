import React,{useEffect} from 'react';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionContainer from '../collection/collection.container'
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { requestCollections } from '../../redux/shop/shop-actions';

const ShopPage = ({requestCollections,match}) => {

  useEffect(()=> {
    requestCollections();
  },[requestCollections])

  return(
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer} /> 
      <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
    </div>
  )
  
}


const mapDipatchToProps = (dispatch) => ({
    requestCollections: () => dispatch(requestCollections())
})


export default connect(null,mapDipatchToProps)(ShopPage);
