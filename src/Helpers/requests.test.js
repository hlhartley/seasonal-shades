import { API } from './requests';

describe('API', () => {
    describe('fetchData', () => {
        let path;

        beforeEach(() => {
            path = 'lipstick'
        });

        it('should call fetch with the correct params', async () => {
            window.fetch = jest.fn();
            API(path)
            expect(window.fetch).toHaveBeenCalledWith('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
        });
    });
});