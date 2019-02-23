export const blushColorsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_BLUSH_COLORS':
            return action.colors
        default:
            return state
    };
};