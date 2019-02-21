export const eyeshadowReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_EYESHADOW':
            return action.eyeshadow
        default:
            return state
    };
};