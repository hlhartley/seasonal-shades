export const nailpolishColorsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_NAILPOLISH_COLORS':
            return action.colors
        default:
            return state
    };
};