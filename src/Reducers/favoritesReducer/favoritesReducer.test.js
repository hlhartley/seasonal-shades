import { favoritesReducer } from './favoritesReducer';
import * as actions from '../../Actions';

describe('favoritesReducer', () => {
    it('should set the initial state', () => {
        const expected = {}
        const result = favoritesReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should set state with the object of the favorited item', () => {
        const initialState = {}
        const color = 'Blue'
        const result = favoritesReducer(initialState, actions.toggleFavorite(color))
        expect(result).toEqual({ 'Blue': true })
    });
});
