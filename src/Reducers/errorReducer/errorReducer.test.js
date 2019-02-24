import { errorReducer } from './errorReducer';
import * as actions from '../../Actions';

describe('errorReducer', () => {
    it('should set initial state', () => {
        const expected = ''
        const result = errorReducer(undefined, {})
        expect(expected).toEqual(result)
    });

    it('should set state with an error message', () => {
        const initialState = ''
        const errorMessage = 'Error message'
        const result = errorReducer(initialState, actions.setError(errorMessage))
        expect(result).toEqual(errorMessage)
    });
});