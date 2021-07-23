import * as actionTypes from './shopping-types';


export const addToCart=(data)=>{
return 
{
    
    type:actionTypes.ADD_TO_CART,
    data :data
  
};


}


export const removeFromCart=(data)=>{
return 
{
  type:actionTypes.REMOVE_FROM_CART,
  data:data
  


}



}


