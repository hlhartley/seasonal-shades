import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ProductCard extends Component {
    render() {
        return(
            <div>
                <div className='product-card-container'>
                    <h2>MATCHING PRODUCT:</h2> 
                    <h2>{this.props.allColors[this.props.color].product.name}</h2>
                    <p>{this.props.allColors[this.props.color].product.description}</p>
                </div>
                <div className='product-info'>
                    <div>
                        <img src={`${this.props.allColors[this.props.color].product.image_link}`} className='product-image'/>
                    </div>
                    <div className='product-info-text'>
                        <p><b>Brand:</b> {this.props.allColors[this.props.color].product.brand}</p>
                        <p><b>Price:</b> ${this.props.allColors[this.props.color].product.price}</p>
                        <p><b>Website:</b> {this.props.allColors[this.props.color].product.website_link}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    nail_polishColors: state.nailpolishColors,
    lipstickColors: state.lipstickColors,
    blushColors: state.blushColors,
    eyeshadowColors: state.eyeshadowColors,
    allColors: state.allColors,
});


export default connect(mapStateToProps)(ProductCard);
