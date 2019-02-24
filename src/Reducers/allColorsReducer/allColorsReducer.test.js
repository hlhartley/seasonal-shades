import { allColorsReducer } from '../../Reducers/allColorsReducer/allColorsReducer';
import * as actions from '../../Actions';

describe('allColorsReducer', () => {
    it('should return the inital state', () => {
        const expected = {}
        const result = allColorsReducer(undefined, {})
        expect(result).toEqual(expected);
    });

    it('should return the state with all colors', () => {
        const initialState = {}
        const colors = {
            522: {
                product: {},
                hexcode: '#EED8BE'
            },
            771: {
                product: {},
                hexcode: '#BD9E9B' 
            },
            'casablanca': {
                product: {},
                hexcode: '#444446'
            }
        }
        const result = allColorsReducer(initialState, actions.setAllColors(colors));
        expect(result).toEqual(colors);
    });
});