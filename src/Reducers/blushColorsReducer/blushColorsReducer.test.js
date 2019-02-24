import { blushColorsReducer } from '../blushColorsReducer/blushColorsReducer';
import * as actions from '../../Actions';

describe('blushColorsReducer', () => {
    it('should return the initial state', () => {
        const expected = []
        const result = blushColorsReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return the state with the blush colors', () => {
        const initialState = []
        const colors = ["#1 Nude", "(300)", "(301)", "(302)", "573 Mineral", "583 Animal", "616 Pulse"]
        const result = blushColorsReducer(initialState, actions.getBlushColors(colors))
        expect(result).toEqual(colors)
    });
});