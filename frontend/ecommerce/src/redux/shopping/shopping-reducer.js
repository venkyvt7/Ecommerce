import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
 
  cartD: [],
};

const  cardItems = (state=[], action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
//  console.log('reucer',state);

      return [

    
       ...state,
      { cartD:action.data} 
             


      ]

    case actionTypes.REMOVE_FROM_CART:
      return {};

      default:
          return state;
  }
};




export default  cardItems;
