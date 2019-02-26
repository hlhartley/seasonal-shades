import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ProductCard extends Component {
    render() {
        const { allColors, color } = this.props
        return(
            <div>
                <div className='product-card-container'>
                    <h2>MATCHING PRODUCT:</h2> 
                    <h2>{allColors[color].product.name}</h2>
                    <p>{allColors[color].product.description}</p>
                </div>
                <div className='product-info'>
                    <div>
                        <img src={`${allColors[color].product.image_link}`} className='product-image' alt='matching product'/>
                    </div>
                    <div className='product-info-text'>
                        <p><b>Brand:</b> {allColors[color].product.brand}</p>
                        <p><b>Price:</b> ${allColors[color].product.price}</p>
                        <p><b>Website:</b> <a href={`${allColors[color].product.website_link}`} target={'_blank'}>{allColors[color].product.website_link}</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    nail_polishColors: state.nailpolishColors,
    lipstickColors: state.lipstickColors,
    blushColors: state.blushColors,
    eyeshadowColors: state.eyeshadowColors,
    allColors: state.allColors,
});

ProductCard.propTypes = {
    nail_polishColors: PropTypes.array,
    lipstickColors: PropTypes.array,
    blushColors: PropTypes.array,
    eyeshadowColors: PropTypes.array,
    allColors: PropTypes.object,
    color: PropTypes.string,
}

export default connect(mapStateToProps)(ProductCard);
