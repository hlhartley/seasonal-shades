import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search Component', () => {
    let wrapper;
    let mockHandleChange;

    beforeEach(() => {
        mockHandleChange = jest.fn()
        wrapper = shallow(<Search handleChange={mockHandleChange}/>)
    });

    it('should take a snapshot and pass in the data correctly', () => {
        expect(wrapper).toMatchSnapshot()
    });
});