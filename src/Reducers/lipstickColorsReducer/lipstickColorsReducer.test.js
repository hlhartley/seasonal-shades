import { lipstickColorsReducer } from './lipstickColorsReducer';
import * as actions from '../../Actions';

describe('lipstickColorsReducer', () => {
    it('should set the initial state', () => {
        const expected = []
        const result = lipstickColorsReducer(undefined, {})
        expect(expected).toEqual(result)
    });

    it('should set state with all the lipstick colors', () => {
        const initialState = []
        const colors = ["#1 Nude", "(300)", "(301)", "(302)", "573 Mineral", "583 Animal", "616 Pulse"]
        const result = lipstickColorsReducer(initialState, actions.getLipstickColors(colors))
        expect(result).toEqual(colors)
    });
});