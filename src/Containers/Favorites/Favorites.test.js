import React from 'react';
import Favorites, { mapStateToProps } from './Favorites';
import { shallow } from 'enzyme';
import { allColors, mockFavorites, mockState } from '../../__fixtures__/mockData';

describe('Favorites', () => {
    let wrapper;

    describe('Favorites component', () => {
        beforeEach(() => {
            wrapper = shallow(<Favorites allColors={allColors} favorites={mockFavorites}/>)
        });

        it('should match the snapshot with everything passed in correctly', () => {
            expect(wrapper).toMatchSnapshot()
        });
    });

    describe('mapStateToProps', () => {
        const expected = {
            allColors: {
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
            },
            favorites: {
                '001lune': true,
                '001petal': true, 
            },
        };
        const mappedProps = mapStateToProps(mockState)
        expect(mappedProps).toEqual(expected)
    });
});
