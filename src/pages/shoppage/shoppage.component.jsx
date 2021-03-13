import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component'
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import {createStructuredSelector} from 'reselect';
import { requestCollections } from '../../redux/shop/shop-actions';
import {selectCollectionIsLoading} from '../../redux/shop/shop-selectors';
class ShopPage extends React.Component {

  componentDidMount() {
    this.props.requestCollections();
  }

  render(){

    const {match,isLoading} = this.props;
    const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
    const CollectionWithSpinner = withSpinner(Collection);

    return(
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props}/>} /> 
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={isLoading} {...props}/>} />
      </div>
    )
  }
}


const mapDipatchToProps = (dispatch) => ({
    requestCollections: () => dispatch(requestCollections())
})

const mapStateToProps = createStructuredSelector(
  {
    isLoading: selectCollectionIsLoading
  }
)

export default connect(mapStateToProps,mapDipatchToProps)(ShopPage);
