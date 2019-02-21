export const getLipstick = (lipstick) => ({
    type: 'GET_LIPSTICK',
    lipstick,
});

export const getLipstickColors = (colors) => ({
    type: 'GET_LIPSTICK_COLORS',
    colors,
});

export const setLoading = (bool) => ({
    type: 'SET_LOADING',
    bool,
});

export const setError = (error) => ({
    type: 'SET_ERROR',
    error,
});