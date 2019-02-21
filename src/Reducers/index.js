import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer/errorReducer';
import { lipstickReducer } from './lipstickReducer/lipstickReducer';
import { blushReducer } from './blushReducer/blushReducer';

const rootReducer = combineReducers({
    error: errorReducer,
    lipstick: lipstickReducer,
    blush: blushReducer,
});

export default rootReducer;