import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorCard from '../ColorCard/ColorCard';

export class ColorList extends Component {
    render() {
        const productType = this.props.type+'Colors';
        const productColors = this.props[productType];

        if (productColors && productColors.length) {
            return (
                <div className='color-container'>
                    {productColors.map((color) => {
                        return <ColorCard color={color} type={this.props.type} />
                    })}
                </div>
            )
        } else {
            return (
                <p>Loading colors...</p>
            )
        }
    }
}

export const mapStateToProps = (state) => ({
    allColors: state.allColors,
    lipstickColors: state.lipstickColors,
    blushColors: state.blushColors,
    eyeshadowColors: state.eyeshadowColors,
    nail_polishColors: state.nailpolishColors,
})

export default connect(mapStateToProps)(ColorList);
