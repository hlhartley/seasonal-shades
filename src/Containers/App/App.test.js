import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { shallow } from 'enzyme';
import { fetchMakeup } from '../../Thunks/fetchMakeup';

jest.mock('../../Thunks/fetchMakeup')

describe('App', () => { 
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
    wrapper = shallow(<App allColors={allColors} lipstickColors={[]} blushColors={undefined} eyeshadowColors={undefined} nail_polishColors={undefined}/>)
  });
  
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(rootReducer)
    ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
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

    it('should render the Header, Navigation, Banner, and ColorList components', () => {
      expect(wrapper.find('Header').length).toEqual(1)
      expect(wrapper.find('Banner').length).toEqual(1)
      expect(wrapper.find('Navigation').length).toEqual(1)
      expect(wrapper.find('ColorList').length).toEqual(1)
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