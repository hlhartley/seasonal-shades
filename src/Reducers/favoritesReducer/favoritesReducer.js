export const favoritesReducer = (state = {}, action) => {
    switch(action.type) {
        case 'TOGGLE_FAVORITE':
            if(state[action.colorName]) {
                // state[action.colorName] = false
                localStorage.removeItem('favorites')
                // if want to delete from an object:
                delete state[action.colorName]
            } else {
                state[action.colorName] = true
            }
            localStorage.setItem('favorites', JSON.stringify({...state}))
            return { ...state }
        default:
            return state
    }
};