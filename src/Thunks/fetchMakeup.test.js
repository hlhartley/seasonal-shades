import { fetchMakeup } from './fetchMakeup';
import { API } from '../Helpers/requests';
import { loadColors } from '../Helpers/colorsHelper';
import { getLipstickColors, getBlushColors, getEyeshadowColors, getNailpolishColors, setError, setLoading, setAllColors } from '../Actions';

jest.mock('../Helpers/requests')

describe('fetchMakeup', () => {
    let mockPath
    let mockDispatch

    beforeEach(() => {
        mockPath = 'lipstifk'
        mockDispatch = jest.fn()
    });

    it('should call dispatch with the setLoading action', () => {
        const thunk = fetchMakeup(mockPath)
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(setLoading(true))
    });

    it('should call API with the correct params', async () => {
        const path = 'lipstick'
        const thunk = fetchMakeup(path)
        await thunk(mockDispatch)
        expect(API).toHaveBeenCalledWith(path)
    });

    it.skip('should call dispatch with setAllColors action', async () => {
        const allColors = {
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
        const thunk = fetchMakeup(mockPath)
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(setAllColors(allColors))
    });

    it('should dispatch setError with message is everything is not ok', async () => {
        const path = 'lipstick'

        API.mockImplementation(() => {
            throw 'Error fetching data'
        });
        const thunk = fetchMakeup(path)
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data'))
    }); 
});