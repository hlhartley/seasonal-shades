import React from 'react';
import PageNotFound from './PageNotFound';
import { shallow } from 'enzyme';

describe('PageNotFound Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PageNotFound />)
    });

    it('should have a snapshot with the data passed in corectly', () => {
        expect(wrapper).toMatchSnapshot()
    });
});