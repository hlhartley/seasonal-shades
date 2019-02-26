import { API } from './requests';

describe('API', () => {
    describe('fetchData', () => {
        let path;

        beforeEach(() => {
            path = 'lipstick'
        });

        it('should call fetch with the correct params if everything is ok', async () => {
            window.fetch = jest.fn();
            API(path)
            expect(window.fetch).toHaveBeenCalledWith('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
        });

        it('should call fetch and throw an error if everything is not ok', async () => {
            const expected = Error('Error fetching data');
            window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
                status: 301,
                json: () => Promise.resolve(expected)
            }));
            await expect(API(path)).rejects.toEqual(expected);
            });
        });
    });