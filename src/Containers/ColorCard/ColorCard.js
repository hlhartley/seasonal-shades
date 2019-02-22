import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ColorCard extends Component {
    render() {
        return(
            <div className='color' style={{ backgroundColor: this.props.hexcode}}>
                <i class="far fa-heart"></i>
                <p>{this.props.allColors[this.props.hexcode]}</p>
            </div>
        )
    };
};

export const mapStateToProps = (state) => ({
    allColors: state.allColors,
})

export default connect(mapStateToProps)(ColorCard);