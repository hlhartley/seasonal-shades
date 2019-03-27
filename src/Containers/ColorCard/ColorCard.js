import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { formatColorName } from '../../Helpers/colorsHelper';
import { toggleFavorite } from '../../Actions';
import PropTypes from 'prop-types';

export class ColorCard extends Component {
    favoriteIconClass(formattedColor) {
        const savedFavorites = localStorage.getItem('favorites');
        const { favorites } = this.props;

        if (savedFavorites && JSON.parse(savedFavorites)[formattedColor]) {
            return "fas fa-heart favorite-color-icon";
        } else if (favorites && favorites[formattedColor]) {
            return "fas fa-heart favorite-color-icon";
        } else {
            return "far fa-heart favorite-color-icon";
        }
    }

    getHexCode(formattedColor) {
        const savedFavorites = localStorage.getItem('favorites');

        if (savedFavorites && JSON.parse(savedFavorites)[formattedColor]) {
            return JSON.parse(savedFavorites)[formattedColor] || this.props.hexcode
        } else if (this.props.allColors[formattedColor]) {
            return this.props.allColors[formattedColor].hexcode;
        } else {
            return 'white';
        }
    }

    render() {
        const { allColors, color, type, toggleFavorite } = this.props
        const formattedColor = formatColorName(color);
        // encodeURI ln36 / decodeURI - in matchparams
        const hexcode = this.getHexCode(formattedColor);

        if (Object.keys(allColors).length) {
            return(
                <div>
                    <i 
                        className={this.favoriteIconClass(formattedColor)} 
                        onClick={() => toggleFavorite({ 
                            colorName: formattedColor,
                            hexcode,    
                        })}>
                    </i>
                    <NavLink to={`/${type}/${formattedColor}`} className='color-link'>
                        <div className='color' style={{ backgroundColor: hexcode }}>
                            <p className='color-hexcode-text'>{color}</p>
                        </div>
                    </NavLink>
                </div>
            )
        } else {
            return (
                <p><i className="far fa-clock"></i> Loading color ...</p>
            )
        }
    };
};

export const mapStateToProps = (state) => ({
    allColors: state.allColors,
    favorites: state.favorites,
});

export const mapDispatchToProps = (dispatch) => ({
    toggleFavorite: (color) => dispatch(toggleFavorite(color))
});

ColorCard.propTypes = {
    allColors: PropTypes.object,
    favorites: PropTypes.object,
    toggleFavorite: PropTypes.func,
    color: PropTypes.string,
    type: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorCard);