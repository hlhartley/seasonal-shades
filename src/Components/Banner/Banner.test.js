import React from 'react';
import Banner from './Banner';
import { shallow } from 'enzyme';

describe('Banner component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Banner />)
    })
    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
