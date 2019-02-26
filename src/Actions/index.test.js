import * as actions from '../Actions';

describe('actions', () => {
    it('should have a type of SET_ALL_COLORS', () => {
        const colors = ["#1 Nude", "(300)", "(301)", "(302)", "573 Mineral", "583 Animal", "616 Pulse"]
        const expectedAction = {
            type: 'SET_ALL_COLORS',
            colors,
        }
        const result = actions.setAllColors(colors);
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of GET_LIPSTICK_COLORS', () => {
        const colors = ["(300)", "(301)", "(302)"]
        const expectedAction = {
            type: 'GET_LIPSTICK_COLORS',
            colors,
        }
        const result = actions.getLipstickColors(colors);
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of GET_BLUSH_COLORS', () => {
        const colors = ["573 Mineral", "583 Animal"]
        const expectedAction = {
            type: 'GET_BLUSH_COLORS',
            colors,
        }
        const result = actions.getBlushColors(colors);
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of GET_EYESHADOW_COLORS', () => {
        const colors = ["(300)", "583 Animal", "616 Pulse"]
        const expectedAction = {
            type: 'GET_EYESHADOW_COLORS',
            colors,
        }
        const result = actions.getEyeshadowColors(colors);
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of GET_NAILPOLISH_COLORS', () => {
        const colors = ["(302)", "573 Mineral"]
        const expectedAction = {
            type: 'GET_NAILPOLISH_COLORS',
            colors,
        }
        const result = actions.getNailpolishColors(colors);
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of TOGGLE_FAVORITE', () => {
        const color = 'Purple'
        const expectedAction = {
            type: 'TOGGLE_FAVORITE',
            color,
        }
        const result = actions.toggleFavorite(color)
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of SET_LOADING', () => {
        const bool = false;
        const expectedAction = {
            type: 'SET_LOADING',
            bool,
        }
        const result = actions.setLoading(false);
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of SET_ERROR', () => {
        const error = 'Error message';
        const expectedAction = {
            type: 'SET_ERROR',
            error,
        }
        const result = actions.setError(error);
        expect(result).toEqual(expectedAction);
    });
});