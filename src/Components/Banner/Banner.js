import React from 'react';

const Banner = (props) => {
        return(
            <div className='banner-container'>
                <img className='banner-img' src={require(`../../Images/${props.type}.jpg`)} alt='colors banner'/>
            </div>
        )
}

export default Banner;