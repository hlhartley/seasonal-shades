import React from 'react';
import { ColorCard, mapStateToProps } from './ColorCard';
import { shallow } from 'enzyme';
import { allColors, mockState, mockFavorites } from '../../__fixtures__/mockData';

describe('ColorCard', () => {
    let wrapper;
    describe('ColorCard component', () => {
        beforeEach(() => {
            wrapper = shallow(<ColorCard color={'casablanca'} type={'lipstick'} allColors={allColors} lipstickColors={[]} blushColors={undefined} eyeshadowColors={undefined} nail_polishColors={undefined} favorites={mockFavorites}/>)
        });

        it('should match the correct snapshot with all the data passed in', () => {
            expect(wrapper).toMatchSnapshot()
        });
    });

    describe('mapStateToProps', () => {
        it('should return an object with all colors and an object of favorites', () => {
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
                    },
                },
                favorites: {
                    '001lune': true,
                    '001petal': true,
                }
            }
            const mappedProps = mapStateToProps(mockState)
            expect(mappedProps).toEqual(expected)
        });
    });
});