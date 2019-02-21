import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer/errorReducer';

const rootReducer = combineReducers({
    error: errorReducer,
});

export default rootReducer;