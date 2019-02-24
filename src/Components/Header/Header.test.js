import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />)
    });

    it('should match the snapshot with all the data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot()
    });
});
