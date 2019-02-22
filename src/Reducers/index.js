import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer/errorReducer';
import { lipstickReducer } from './lipstickReducer/lipstickReducer';
import { lipstickColorsReducer } from './lipstickColorsReducer/lipstickColorsReducer';
import { blushReducer } from './blushReducer/blushReducer';
import { blushColorsReducer } from './blushColorsReducer/blushColorsReducer';
import { eyeshadowReducer } from './eyeshadowReducer/eyeshadowReducer';
import { eyeshadowColorsReducer } from './eyeshadowColorsReducer/eyeshadowColorsReducer';
import { nailpolishReducer } from './nailpolishReducer/nailpolishReducer';
import { nailpolishColorsReducer } from './nailpolishColorsReducer/nailpolishColorsReducer';
import { allColorsReducer } from './allColorsReducer/allColorsReducer';

const rootReducer = combineReducers({
    error: errorReducer,
    lipstick: lipstickReducer,
    lipstickColors: lipstickColorsReducer,
    blush: blushReducer,
    blushColors: blushColorsReducer,
    eyeshadow: eyeshadowReducer,
    eyeshadowColors: eyeshadowColorsReducer,
    nailpolish: nailpolishReducer,
    nailpolishColors: nailpolishColorsReducer,
    allColors: allColorsReducer,
});

export default rootReducer;