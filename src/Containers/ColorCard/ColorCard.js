import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export class ColorCard extends Component {
    render() {
        return(
            'hi'
            // <NavLink to={`/${this.props.type}/${this.props.color}`}>
            //     <div className='color' style={{ backgroundColor: this.props.allColors[this.props.colour_name]}}>
            //         <i class="far fa-heart"></i>
            //         <p>{this.props.allColors[this.props.colour_name]}</p>
            //     </div>
            // </NavLink>
        )
    };
};

export const mapStateToProps = (state) => ({
    allColors: state.allColors,
})

export default connect(mapStateToProps)(ColorCard);