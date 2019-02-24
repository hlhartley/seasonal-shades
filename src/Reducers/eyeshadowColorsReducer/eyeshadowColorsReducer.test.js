import { eyeshadowColorsReducer } from './eyeshadowColorsReducer';
import * as actions from '../../Actions';

describe('eyeshadowColorsReducer', () => {
    it('should set initial state', () => {
        const expected = []
        const result = eyeshadowColorsReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should set state with all the eyeshadow colors', () => {
        const initialState = []
        const colors = ["#1 Nude", "(300)", "(301)", "(302)", "573 Mineral", "583 Animal", "616 Pulse"]
        const result = eyeshadowColorsReducer([], actions.getEyeshadowColors(colors))
        expect(result).toEqual(colors)
    });
});