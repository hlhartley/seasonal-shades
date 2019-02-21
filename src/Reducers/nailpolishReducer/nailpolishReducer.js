export const nailpolishReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_NAILPOLISH':
            return action.nail_polish
        default:
            return state
    };
};