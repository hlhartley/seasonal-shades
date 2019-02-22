export const allColorsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_ALL_COLORS':
            return action.colors
        default:
            return state
    };
};