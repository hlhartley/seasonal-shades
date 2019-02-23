import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer/errorReducer';
import { lipstickColorsReducer } from './lipstickColorsReducer/lipstickColorsReducer';
import { blushColorsReducer } from './blushColorsReducer/blushColorsReducer';
import { eyeshadowColorsReducer } from './eyeshadowColorsReducer/eyeshadowColorsReducer';
import { nailpolishColorsReducer } from './nailpolishColorsReducer/nailpolishColorsReducer';
import { allColorsReducer } from './allColorsReducer/allColorsReducer';

const rootReducer = combineReducers({
    error: errorReducer,
    lipstickColors: lipstickColorsReducer,
    blushColors: blushColorsReducer,
    eyeshadowColors: eyeshadowColorsReducer,
    nailpolishColors: nailpolishColorsReducer,
    allColors: allColorsReducer,
});

export default rootReducer;