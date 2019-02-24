import React from 'react';

const Header = () => {
    return(
        <div className='header-container'>
            {/* <div className='search-container'>
                <input className='search-input'></input>
                <i class="fas fa-search"></i>
            </div> */}
            <h1 className='title'>Seasonal Shades</h1>
            <div className='user-info'>
                <p>Welcome, User!</p>
                <i className="fas fa-heart"></i>
            </div>
        </div>
    )
};

export default Header;

