export const allColorsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_ALL_COLORS':
            return { ...state, ...action.colors };
        default:
            return state;
    };
};