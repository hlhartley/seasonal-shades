export const initialState = () => {
    return JSON.parse(localStorage.getItem('favorites')) || {};
}

export const favoritesReducer = (state = initialState(), action) => {
    switch(action.type) {
        case 'TOGGLE_FAVORITE':
            const { colorName, hexcode } = action.color;

            if (state[colorName]) {
                delete state[colorName];
            } else {
                state[colorName] = hexcode;
            }
  
            localStorage.setItem('favorites', JSON.stringify({...state}))
            return { ...state }
        default:
            return state
    }
};