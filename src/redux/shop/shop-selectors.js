import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []

  )
  
export const selectCollectionFromUrlParam = collectionId => (
    createSelector(
        [selectCollections],
        collections => (
            collections ? collections[collectionId]: null
        )
    )
)
       
export const selectCollectionIsLoading = createSelector(
    [selectShop],
    shop => shop.isLoading
)
    

