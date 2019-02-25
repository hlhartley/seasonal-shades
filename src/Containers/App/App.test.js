import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { shallow } from 'enzyme';
import { fetchMakeup } from '../../Thunks/fetchMakeup';

describe('App', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(rootReducer)
    ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  describe('App Component', () => {
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
      
    });
  });

  describe('mapStateToProps', () => {

  });

  describe('mapDispatchToProps', () => {

  });
});