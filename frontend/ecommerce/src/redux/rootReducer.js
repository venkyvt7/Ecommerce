import {combineReducers} from 'redux'
import cardItems from './shopping/shopping-reducer';

const rootReducer=combineReducers({
cardItems,
});


export default rootReducer;