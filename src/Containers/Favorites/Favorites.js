import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorCard from '../ColorCard/ColorCard';
import PropTypes from 'prop-types';

export class Favorites extends Component {
    render() {
        if(Object.keys(this.props.favorites).length) {
            return (
                <div>
                <h2 className='favorite-colors-text'>FAVORITE COLORS:</h2>
                <div className='favorite-colors-container'>
                {Object.keys(this.props.favorites).map((favoriteColor) => {
                    return (
                        <ColorCard color={favoriteColor}/>
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
};

export default connect(mapStateToProps)(Favorites);