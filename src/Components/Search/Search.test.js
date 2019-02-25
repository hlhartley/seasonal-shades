import React from 'react';
import Search, { mapStateToProps } from './Search';
import { shallow } from 'enzyme';
import { mockState } from '../../__fixtures__/mockData';

describe('Search', () => {
    describe('Search Component', () => {
        let wrapper;
        let mockHandleChange;
    
        beforeEach(() => {
            mockHandleChange = jest.fn()
            wrapper = shallow(<Search handleChange={mockHandleChange} lipstickColors={[]} blushColors={undefined} eyeshadowColors={undefined} nail_polishColors={undefined}/>)
        });
    
        it('should take a snapshot and pass in the data correctly', () => {
            expect(wrapper).toMatchSnapshot()
        });
    });

    describe('mapStateToProps', () => {
        const expected = {
            blushColors: undefined,
            eyeshadowColors: undefined,
            lipstickColors: [],
            nail_polishColors: undefined,
        }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
    });
});