import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorCard from '../ColorCard/ColorCard';
import PropTypes from 'prop-types';

export class ColorList extends Component {
    render() {
        const { type, colorInput } = this.props
        const productType = type+'Colors';
        const productColors = this.props[productType];
        if (colorInput) {
            return (
                <div className='filtered-color-container'>
                    {productColors.filter((color) => {
                        return color.toLowerCase().includes(colorInput)
                    }).map((color) => {
                        return (
                            <ColorCard color={color} type={type}/>
                        )
                    })}
                </div>
            )
        } else if (productColors && productColors.length) {
            return (
                <div className='color-container'>
                    {productColors.map((color) => {
                        return <ColorCard color={color} type={type} />
                    })}
                </div>
            )
        } else {
            return (
                <p className='loading-message'><i className="far fa-clock"></i> Loading colors ...</p>
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
});

ColorList.propTypes = {
    allColors: PropTypes.object,
    lipstickColors: PropTypes.array,
    blushColors: PropTypes.array,
    eyeshadowColors: PropTypes.array,
    nail_polishColors: PropTypes.array,
    type: PropTypes.string,
    colorInput: PropTypes.string,
}

export default connect(mapStateToProps)(ColorList);
