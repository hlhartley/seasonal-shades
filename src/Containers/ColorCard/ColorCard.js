import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { formatColorName } from '../../Helpers/colorsHelper';
import { toggleFavorite } from '../../Actions';

export class ColorCard extends Component {
    constructor() {
        super();
    }

    render() {
        const formattedColor = formatColorName(this.props.color);
        const { hexcode } = this.props.allColors[formattedColor];
        if (Object.keys(this.props.allColors).length) {
            return(
                <NavLink to={`/${this.props.type}/${formattedColor}`} className='color-link'>
                    <div className='color' style={{ backgroundColor: hexcode }}>
                        <i className={this.props.favorites[formattedColor] ? "fas fa-heart" : "far fa-heart"} onClick={() => this.props.toggleFavorite(formattedColor)}></i>
                        <p className='color-hexcode-text'>{this.props.color}</p>
                    </div>
                </NavLink>
            )
        } else {
            return (
                <p>Loading all colors...</p>
            )
        }
    };
};

export const mapStateToProps = (state) => ({
    allColors: state.allColors,
    favorites: state.favorites,
})

export const mapDispatchToProps = (dispatch) => ({
    toggleFavorite: (color) => dispatch(toggleFavorite(color))
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorCard);