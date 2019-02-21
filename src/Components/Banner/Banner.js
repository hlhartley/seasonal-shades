import React from 'react';

export const Banner = () => {
    return(
        <div className='banner-container'>
            <img className='banner-img' src={require('../../Images/blush.jpg')} />
            {/* <p className='banner-text'>Our mission is to find you the perfect shade</p> */}
        </div>
    )
}