export const setAllColors = (colors) => ({
    type: 'SET_ALL_COLORS',
    colors,
})

export const getLipstickColors = (colors) => ({
    type: 'GET_LIPSTICK_COLORS',
    colors,
});

export const getBlushColors = (colors) => ({
    type: 'GET_BLUSH_COLORS',
    colors,
});

export const getEyeshadowColors = (colors) => ({
    type: 'GET_EYESHADOW_COLORS',
    colors,
});

export const getNailpolishColors = (colors) => ({
    type: 'GET_NAILPOLISH_COLORS',
    colors,
});

export const toggleFavorite = (colorName) => ({
    type: 'TOGGLE_FAVORITE',
    colorName,
})

export const setLoading = (bool) => ({
    type: 'SET_LOADING',
    bool,
});

export const setError = (error) => ({
    type: 'SET_ERROR',
    error,
});