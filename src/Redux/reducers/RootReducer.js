import reducer from './Reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cart:reducer,
})

export default rootReducer;