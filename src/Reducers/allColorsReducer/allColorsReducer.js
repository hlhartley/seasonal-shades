export const allColorsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_ALL_COLORS':
            // localStorage.setItem('allColors', JSON.stringify(action.colors))
            return { ...state, ...action.colors };
        default:
            return state;
    };
};