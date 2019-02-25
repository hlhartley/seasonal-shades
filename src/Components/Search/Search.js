import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Search = (props) => {
    if (props[props.type + 'Colors'].length) {
        return(
            <div className='color-search'>
                <p><b>Total {props.type} results:</b> <u>{`${props[props.type + 'Colors'].length}`}</u></p>
                <div>
                    <i className="fas fa-search"></i>
                    <input type="text" onChange={props.handleChange} placeholder='Search by color name' className='search-input'></input>
                </div>
            </div>
        )
    } else {
        return(
            <div className='color-search'>
                <p><b>Total {props.type} results:</b> <u>0</u></p>
                <div>
                    <i className="fas fa-search"></i>
                    <input type="text" onChange={props.handleChange} placeholder='Search by color name' className='search-input'></input>
                </div>
            </div>
        )
    }
};

export const mapStateToProps = (state) => ({
    nail_polishColors: state.nailpolishColors,
    lipstickColors: state.lipstickColors,
    blushColors: state.blushColors,
    eyeshadowColors: state.eyeshadowColors,
});

Search.propTypes = {
    handleChange: PropTypes.func,
    type: PropTypes.string,
}

export default connect(mapStateToProps)(Search)
