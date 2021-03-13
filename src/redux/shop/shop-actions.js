import {
    REQUEST_COLLECTIONS_PENDING,
    REQUEST_COLLECTIONS_SUCCESS,
    REQUEST_COLLECTIONS_FAILED
} from './shop-types';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';


export const requestCollections = () => (dispatch) => {
    dispatch({ type: REQUEST_COLLECTIONS_PENDING })
    const collectionRef = firestore.collection('collections');
    collectionRef.get()
        .then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch({ type: REQUEST_COLLECTIONS_SUCCESS, payload: collectionsMap })
        })
        .catch(error => dispatch({ type: REQUEST_COLLECTIONS_FAILED, payload: error }))
}



