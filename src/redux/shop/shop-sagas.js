import {takeLatest, call,put} from 'redux-saga/effects';
import {
    REQUEST_COLLECTIONS_PENDING,
    REQUEST_COLLECTIONS_SUCCESS,
    REQUEST_COLLECTIONS_FAILED} 
from './shop-types';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';

export function* fetchCollectionsAsync() {
    yield console.log('im fired');
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put({ type: REQUEST_COLLECTIONS_SUCCESS, payload: collectionsMap })
    } catch(error){
        yield put({ type: REQUEST_COLLECTIONS_FAILED, payload: error })
    }
}
export function* fetchCollectionsStart() {
    yield takeLatest(
        REQUEST_COLLECTIONS_PENDING,
        fetchCollectionsAsync
    );
}