import React from 'react';
import { shallow } from 'enzyme';
import ProductCard, { mapStateToProps } from './ProductCard';
import { allColors, mockState } from '../../__fixtures__/mockData';

describe('ProductCard', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ProductCard color={'Casablanca'} allColors={allColors} lipstickColors={[]} blushColors={[]} eyeshadowColors={[]} nail_polishColors={[]}/>)
    });
    describe('ProductCard component', () => {
        it('should have the correct snapshot with the correct data passed in', () => {
            expect(wrapper).toMatchSnapshot()
        });
    });

    describe('mapStateToProps', () => {
        it('should return an object with all colors', () => {
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
                blushColors: undefined,
                eyeshadowColors: undefined,
                lipstickColors: [],
                nail_polishColors: undefined,
            }
            const mappedProps = mapStateToProps(mockState)
            expect(mappedProps).toEqual(expected)
        });
    });
});