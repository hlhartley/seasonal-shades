export const lipstickReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_LIPSTICK':
            return action.lipstick
        case 'GET_LIPSTICK_COLORS':
            return action.colors
        default:
            return state
    }
}