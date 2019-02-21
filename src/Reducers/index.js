import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer/errorReducer';
import { lipstickReducer } from './lipstickReducer/lipstickReducer';

const rootReducer = combineReducers({
    error: errorReducer,
    lipstick: lipstickReducer,
});

export default rootReducer;