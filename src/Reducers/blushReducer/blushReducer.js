export const blushReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_BLUSH':
            return action.blush
        case 'GET_BLUSH_COLORS':
            return action.colors
        default:
            return state
    };
};