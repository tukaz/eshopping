import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component'
import {Route} from 'react-router-dom';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import withSpinner from '../../components/with-spinner/with-spinner.component';

import { updateCollections } from '../../redux/shop/shop-actions';
class ShopPage extends React.Component {
  
  state = {
    loading: true
  }


  componentDidMount() {

    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
      updateCollections(collectionsMap);
      this.setState({loading:false})
    });
  }

  render(){

    const {match} = this.props;
    const {loading} = this.state;
    const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
    const CollectionWithSpinner = withSpinner(Collection);

    return(
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>} /> 
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={loading} {...props}/>} />
      </div>
    )
  }
}


const mapDipatchToProps = (dispatch) => ({
  updateCollections: collections => 
    dispatch(updateCollections(collections))
})
export default connect(null,mapDipatchToProps)(ShopPage);
