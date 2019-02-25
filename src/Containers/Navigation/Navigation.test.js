import React from 'React';
import { Navigation } from './Navigation';
import { shallow } from 'enzyme';
import { fetchMakeup } from '../../Thunks/fetchMakeup';
import { mapDispatchToProps } from './Navigation';

jest.mock('../../Thunks/fetchMakeup')

describe('Navigation', () => {
    let wrapper;
    describe('Navigation component', () => {
        beforeEach(() => {
            let mockUpdateCurrentType = jest.fn()
            let mockFetchMakeup= jest.fn()
            wrapper = shallow(<Navigation updateCurrentType={mockUpdateCurrentType} lipstickColors={[]} blushColors={undefined} eyeshadowColors={undefined} nail_polishColors={['Blue']} fetchMakeup={mockFetchMakeup}/>)
        });

        it('should match the snapshot with all the data passed in correctly', () => {
            expect(wrapper).toMatchSnapshot()
        });

        it('should have a proper default state', () => {
            expect(wrapper.state()).toEqual({
                activeLink: 'eyeshadow',
            });
        });

        it('handleClick should setState with the activeLink, call updateCurrentType, and call fetchMakeup', async () => {
            wrapper.instance().handleClick('lipstick')
            expect(wrapper.instance().state.activeLink).toEqual('lipstick')
            wrapper.instance().handleClick('nailpolish')
            expect(wrapper.instance().state.activeLink).toEqual('nailpolish')
            expect(wrapper.instance().props.updateCurrentType).toHaveBeenCalled()
            await expect(wrapper.instance().props.fetchMakeup).toHaveBeenCalled()
        })
    });

    describe('mapDispatchToProps', async () => {
        it('calls dispatch with fetchMakeup action when fetchMakeup is called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = fetchMakeup('lipstick')
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.fetchMakeup('lipstick')
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        });
    });
})