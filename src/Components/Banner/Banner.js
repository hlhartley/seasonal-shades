import React from 'react';
import PropTypes from 'prop-types';

const Banner = (props) => {
        return(
            <div className='banner-container'>
                <img className='banner-img' src={require(`../../Images/${props.type}.jpg`)} alt='colors banner'/>
            </div>
        )
};

Banner.propTypes = {
    type: PropTypes.string,
};

export default Banner;