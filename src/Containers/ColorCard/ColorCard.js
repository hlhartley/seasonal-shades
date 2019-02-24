import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { formatColorName } from '../../Helpers/colorsHelper';

export class ColorCard extends Component {
    constructor() {
        super()
    }
    render() {
        const formattedColor = formatColorName(this.props.color);
        const { hexcode } = this.props.allColors[formattedColor];

        if (Object.keys(this.props.allColors).length) {
            return(
                <NavLink to={`/${this.props.type}/${formattedColor}`} className='color-link'>
                    <div className='color' style={{ backgroundColor: hexcode }}>
                        <i className="far fa-heart"></i>
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
})

export default connect(mapStateToProps)(ColorCard);