import React from 'react';
import { NavLink } from 'react-router-dom';

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
                <NavLink to='/favorites'><i className="fas fa-heart"></i></NavLink>
            </div>
        </div>
    )
};

export default Header;

