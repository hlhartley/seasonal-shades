export const getLipstick = (lipstick) => ({
    type: 'GET_LIPSTICK',
    lipstick,
});

export const getLipstickColors = (colors) => ({
    type: 'GET_LIPSTICK_COLORS',
    colors,
});

export const getBlush = (blush) => ({
    type: 'GET_BLUSH',
    blush,
});

export const getBlushColors = (colors) => ({
    type: 'GET_BLUSH_COLORS',
    colors,
})

export const setLoading = (bool) => ({
    type: 'SET_LOADING',
    bool,
});

export const setError = (error) => ({
    type: 'SET_ERROR',
    error,
});