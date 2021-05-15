import CollectionOverview from './collection-overview.component';
import {connect} from 'react-redux';
import {compose} from 'redux';
import withSpinner from '../with-spinner/with-spinner.component';
import {createStructuredSelector} from 'reselect';
import {selectCollectionIsLoading} from '../../redux/shop/shop-selectors';

const mapStateToProps = createStructuredSelector(
    {
      isLoading: selectCollectionIsLoading
    }
  )

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionOverview)

export default CollectionOverviewContainer;