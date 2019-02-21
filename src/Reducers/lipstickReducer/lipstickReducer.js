export const lipstickReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_LIPSTICK':
            return action.lipstick
        default:
            return state
    }
}