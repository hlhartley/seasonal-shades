import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorCard from '../ColorCard/ColorCard';
import PropTypes from 'prop-types';

export class Favorites extends Component {
    render() {
        const { favorites, type } = this.props 
        console.log(Object.keys(JSON.parse(localStorage.getItem('favorites'))))
        if(Object.keys(JSON.parse(localStorage.getItem('favorites'))).length) {
            return (
                <div>
                <h2 className='favorite-colors-text'>FAVORITE COLORS:</h2>
                <div className='favorite-colors-container'>
                {Object.keys(JSON.parse(localStorage.getItem('favorites'))).map((favoriteColor) => {
                    return (
                        <ColorCard color={favoriteColor} type={type}/>
                        )
                    })
                }
                </div>
                </div>
            )
        } else {
            return(
                <div className='no-favorites-container'>
                    <i className="fas fa-heart-broken"></i>
                    <p className='no-favorites-text'>No favorites found ...</p>
                </div>
            )
        }
    }
}

export const mapStateToProps = (state) => ({
    allColors: state.allColors,
    favorites: state.favorites,
});

Favorites.propTypes = {
    allColors: PropTypes.object,
    favorites: PropTypes.object,
    type: PropTypes.string,
};

export default connect(mapStateToProps)(Favorites);