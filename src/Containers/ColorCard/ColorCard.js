import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export class ColorCard extends Component {
    render() {
        return(
            <NavLink to='/'>
                <div className='color' style={{ backgroundColor: this.props.hexcode}}>
                    <i class="far fa-heart"></i>
                    <p>{this.props.allColors[this.props.hexcode]}</p>
                </div>
            </NavLink>
        )
    };
};

export const mapStateToProps = (state) => ({
    allColors: state.allColors,
})

export default connect(mapStateToProps)(ColorCard);