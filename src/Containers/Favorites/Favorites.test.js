import React from 'react';
import Favorites, { mapStateToProps } from './Favorites';
import { shallow } from 'enzyme';

describe('Favorites', () => {
    let wrapper;

    describe('Favorites component', () => {
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
        const mockFavorites = {
            '006infinity': true,
            '002coralshape': true,
        }
        beforeEach(() => {
            wrapper = shallow(<Favorites allColors={allColors} favorites={mockFavorites}/>)
        });

        it('should match the snapshot with everything passed in correctly', () => {
            expect(wrapper).toMatchSnapshot()
        });
    });

    describe('mapStateToProps', () => {
        const mockState = {
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
                '006infinity': true,
                '002coralshape': true,
            },
            blushColors: undefined,
            eyeshadowColors: undefined,
        };
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
                '006infinity': true,
                '002coralshape': true,
            },
        };
        const mappedProps = mapStateToProps(mockState)
        expect(mappedProps).toEqual(expected)
    });
});
