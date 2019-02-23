import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { formatColorName } from '../../Helpers/colorsHelper';

export class ColorCard extends Component {
    render() {
        const formattedColor = formatColorName(this.props.color);
        const { hexcode, product } = this.props.allColors[formattedColor];

        if (Object.keys(this.props.allColors).length) {
            return(
                <NavLink to={`/${this.props.type}/${formattedColor}`}>
                    <div className='color' style={{ backgroundColor: hexcode }}>
                        <i class="far fa-heart"></i>
                        <p>{this.props.color}</p>
                    </div>
                </NavLink>
            )
        } else {
            return (
                <p>BLAH</p>
            )
        }
    };
};

export const mapStateToProps = (state) => ({
    allColors: state.allColors,
})

export default connect(mapStateToProps)(ColorCard);