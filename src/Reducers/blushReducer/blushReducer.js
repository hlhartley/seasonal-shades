export const blushReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_BLUSH':
            return action.blush
        default:
            return state
    };
};