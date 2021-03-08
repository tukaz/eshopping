import cloner from 'lodash.clone';

export const mergeCartItems = (prevItems,item) => {
    const itemFound = prevItems.find(element => element.id === item.id);
    if(itemFound){
      itemFound.q++;
      return cloner(prevItems);
    } else {
      return [...prevItems,{...item,q:1}]
    }
  }
  