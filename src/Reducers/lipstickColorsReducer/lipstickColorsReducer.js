export const lipstickColorsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_LIPSTICK_COLORS':
            return action.colors
        default:
            return state
    }
}