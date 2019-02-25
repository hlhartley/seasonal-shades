import React, { Component } from 'react';
import ColorCard from '../../Containers/ColorCard/ColorCard';
import { connect } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import PropTypes from 'prop-types';

class ShowColor extends Component {
    constructor() {
        super()
    }
    render() {
        const type = this.props.type.toUpperCase()
        if(this.props.allColors) {
            return(
                <div className='color-info-card'>
                    <h2 className='color-info-card-title'>{`${type}`}</h2>
                    <ColorCard color={this.props.color}/>
                    <div className='product-info-card'>
                        <ProductCard color={this.props.color}/>
                    </div>
                </div>
            )
        } else {
            return(
                'loading color...'
            )
        }
    }
}

export const mapStateToProps = (state) => ({
    nail_polishColors: state.nailpolishColors,
    lipstickColors: state.lipstickColors,
    blushColors: state.blushColors,
    eyeshadowColors: state.eyeshadowColors,
    allColors: state.allColors,
});

ShowColor.propTypes = {
    nail_polishColors: PropTypes.array,
    lipstickColors: PropTypes.array,
    blushColors: PropTypes.array,
    eyeshadowColors: PropTypes.array,
    allColors: PropTypes.object,
    color: PropTypes.string,
    type: PropTypes.string,
};

export default connect(mapStateToProps)(ShowColor);
