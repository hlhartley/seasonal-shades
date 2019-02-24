import { nailpolishColorsReducer } from './nailpolishColorsReducer';
import * as actions from '../../Actions';

describe('nailPolishColorsReducer', () => {
    it('should set initial state', () => {
        const expected = []
        const result = nailpolishColorsReducer(undefined, {})
        expect(expected).toEqual(result)
    });

    it('should set state with all the nailpolish colors', () => {
        const initialState = []
        const colors = ["#1 Nude", "(300)", "(301)", "(302)", "573 Mineral", "583 Animal", "616 Pulse"]
        const result = nailpolishColorsReducer(initialState, actions.getNailpolishColors(colors))
        expect(result).toEqual(colors)
    });
});