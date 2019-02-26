import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { formatColorName } from '../../Helpers/colorsHelper';
import { toggleFavorite } from '../../Actions';
import PropTypes from 'prop-types';

export class ColorCard extends Component {
    render() {
        const { allColors, color, type, toggleFavorite } = this.props
        const formattedColor = formatColorName(color);
        const { hexcode } = allColors[formattedColor];
        if (Object.keys(allColors).length) {
            return(
                <NavLink to={`/${type}/${formattedColor}`} className='color-link'>
                    <div className='color' style={{ backgroundColor: hexcode }}>
                        <i className={(JSON.parse(localStorage.getItem('favorites'))[formattedColor]) ? "fas fa-heart" : "far fa-heart"} onClick={() => toggleFavorite(formattedColor)}></i>
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