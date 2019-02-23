export const eyeshadowColorsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_EYESHADOW_COLORS':
            return action.colors
        default:
            return state
    };
};