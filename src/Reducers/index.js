import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer/errorReducer';
import { lipstickReducer } from './lipstickReducer/lipstickReducer';
import { lipstickColorsReducer } from './lipstickColorsReducer/lipstickColorsReducer';
import { blushReducer } from './blushReducer/blushReducer';
import { blushColorsReducer } from './blushColorsReducer/blushColorsReducer';

const rootReducer = combineReducers({
    error: errorReducer,
    lipstick: lipstickReducer,
    lipstickColors: lipstickColorsReducer,
    blush: blushReducer,
    blushColors: blushColorsReducer,
});

export default rootReducer;