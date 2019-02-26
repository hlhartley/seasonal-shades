import { fetchMakeup } from './fetchMakeup';
import { API } from '../Helpers/requests';
import { loadColors } from '../Helpers/colorsHelper';
import { getLipstickColors, getBlushColors, getEyeshadowColors, getNailpolishColors, setError, setLoading, setAllColors } from '../Actions';

jest.mock('../Helpers/requests')
jest.mock('../Helpers/colorsHelper')

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

const productColors = []
loadColors.mockImplementation(() => ({
    allColors,
    productColors,
}))

describe('fetchMakeup', () => {
    let mockPath
    let mockDispatch

    beforeEach(() => {
        mockPath = 'lipstick'
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

    it('should call dispatch with setAllColors action', async () => {
        const someProduct = [
            {id: 1040, brand: "zorah biocosmetiques", name: "Eyeshadow", price: "0.0", price_sign: "$"},
            {id: 1038, brand: "sally b's skin yummies", name: "B Smudged", price: "0"},
        ]
        
        API.mockImplementation(() => someProduct);
        const thunk = fetchMakeup(mockPath)
        await thunk(mockDispatch)
        
        expect(mockDispatch).toHaveBeenCalledWith(setAllColors(allColors))
    });

    it('should dispatch setError with message is everything is not ok', async () => {
        const path = 'lipstick'

        API.mockImplementation(() => {
            throw new Error ('Error fetching data')
        });
        const thunk = fetchMakeup(path)
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data'))
    }); 

    it('should dispatch setLoading with bool of false', async () => {
        const path = 'lipstick'
        const expected = {}

        API.mockImplementation(() => Promise.resolve ({
            status: 200,
            json:() => Promise.resolve(expected)
        }));
        const thunk = fetchMakeup(path)
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(setLoading(false))
    });
});