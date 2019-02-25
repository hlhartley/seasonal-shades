import React from 'react';
import Header, { mapStateToProps } from './Header';
import { shallow } from 'enzyme';
import { mockFavorites, mockState } from '../../__fixtures__/mockData';

describe('Header', () => {
    let wrapper;
    describe('Header component', () => {
        beforeEach(() => {
            wrapper = shallow(<Header favorites={mockFavorites}/>)
        });
    
        it('should match the snapshot with all the data passed in correctly', () => {
            expect(wrapper).toMatchSnapshot()
        });
    });

    describe('mapStateToProps', () => {
        it(' should return an object with all favorites', () => {
            const expected = {
                favorites: {
                    '001lune': true,
                    '001petal': true, 
                }
            }
            const mappedProps = mapStateToProps(mockState)
            expect(mappedProps).toEqual(expected)
        });
    });
});

