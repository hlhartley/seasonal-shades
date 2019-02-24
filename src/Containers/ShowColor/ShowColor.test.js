import React from 'react'
import ShowColor, { mapStateToProps } from './ShowColor'
import { shallow } from 'enzyme';

describe('ShowColor', () => {
    let wrapper;
    beforeEach(() => {
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
        wrapper = shallow(<ShowColor color={'Casablanca'} type={'lipstick'} allColors={allColors} lipstickColors={[]} blushColors={[]} eyeshadowColors={[]} nail_polishColors={[]}/>)
    });

    describe('ShowColor component', () => {
        it('should match the snapshot with all the correct data passed in', () => {
            expect(wrapper).toMatchSnapshot()
        })
    });

    describe('mapStateToProps', () => {
        it('should return an object with all colors', () => {
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
                blushColors: undefined,
                eyeshadowColors: undefined,
                lipstickColors: [],
                nail_polishColors: undefined,
                moreColors: undefined,
            }
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