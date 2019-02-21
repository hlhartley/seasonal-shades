import React from 'react';

export const Header = () => {
    return(
        <div className='header-container'>
            {/* <div className='search-container'>
                <input className='search-input'></input>
                <i class="fas fa-search"></i>
            </div> */}
            <h1 className='title'>Seasonal Shades</h1>
            <div>
                <i className="fas fa-user-circle"></i>
                <i className="fas fa-heart"></i>
            </div>
        </div>
    )
};

