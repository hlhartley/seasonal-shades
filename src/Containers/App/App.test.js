import React from 'react';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { shallow } from 'enzyme';
import { fetchMakeup } from '../../Thunks/fetchMakeup';
import { allColors, mockState } from '../../__fixtures__/mockData';

jest.mock('../../Thunks/fetchMakeup')

describe('App', () => { 
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App allColors={allColors} lipstickColors={[]} blushColors={undefined} eyeshadowColors={undefined} nail_polishColors={undefined} fetchMakeup={jest.fn()}/>)
  });

  describe('App Component', () => {
    it('should exist', () => {
      expect(wrapper).toBeDefined()
    });

    it('should match the correct snapshot with everything passed in correctly', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it('should have a proper default state', () => {
      expect(wrapper.state()).toEqual({
        currentType: 'eyeshadow',
        inputValue: '',
      });
    });

    it('handleChange should setState with the correct input value', () => {
      const mockEvent = (value) => {
        return {
          target: {
            value,
          }
        }
      }
      const expected = {
        currentType: 'eyeshadow',
        inputValue: 'some input',
      }
      wrapper.instance().handleChange(mockEvent('some input'))
      expect(expected.inputValue).toEqual('some input')
    });

    it('updateCurrentType should setState with the correct type', () => {
      const expected = {
        currentType: 'blush',
        inputValue: '',
      }
      wrapper.instance().updateCurrentType('blush')
      expect(expected.currentType).toEqual('blush')
    });
  });

  describe('mapStateToProps', () => {
    it('should should return an object with all colors, blushColors, eyeshadowColors, lipstickColors, and nail_polishColors', () => {
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

  describe('mapDispatchToProps', () => {
    it('calls dispatch with fetchMakeup action when fetchMakeup is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = fetchMakeup('eyeshadow')
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchMakeup('eyeshadow')
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});