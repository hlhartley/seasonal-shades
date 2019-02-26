export const favoritesReducer = (state = {}, action) => {
    switch(action.type) {
        case 'TOGGLE_FAVORITE':
            const { colorName, hexcode } = action.color;

            if(state[colorName]) {
                // state[action.colorName] = false
                // if want to delete from an object:
                delete state[colorName];
                // localStorage.removeItem('favorites')
            } else {
                state[colorName] = hexcode;
                localStorage.setItem('favorites', JSON.stringify({...state}))
            }
            return { ...state }
        default:
            return state
    }
};