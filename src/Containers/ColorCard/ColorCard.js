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
            return "fas fa-heart";
        } else if (favorites && favorites[formattedColor]) {
            return "fas fa-heart";
        } else {
            return "far fa-heart";
        }
    }

    getHexCode(formattedColor) {
        const savedFavorites = localStorage.getItem('favorites');

        if (savedFavorites && JSON.parse(savedFavorites)[formattedColor]) {
            return JSON.parse(savedFavorites)[formattedColor].hexcode;
        } else if (this.props.allColors[formattedColor]) {
            return this.props.allColors[formattedColor].hexcode;
        } else {
            return "white";
        }
    }

    render() {
        const { allColors, color, type, favorites, toggleFavorite } = this.props
        const formattedColor = formatColorName(color);
        // const { hexcode } = allColors[formattedColor];
        const hexcode = this.getHexCode(formattedColor);

        if (Object.keys(allColors).length) {
            return(
                <NavLink to={`/${type}/${formattedColor}`} className='color-link'>
                    <div className='color' style={{ backgroundColor: hexcode }}>
                        <i 
                            className={this.favoriteIconClass(formattedColor)} 
                            onClick={() => toggleFavorite({ 
                                colorName: formattedColor,
                                hexcode,    
                            })}>
                        </i>
                        <p className='color-hexcode-text'>{color}</p>
                    </div>
                </NavLink>
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