import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

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
                <NavLink to='/favorites'>
                    <i 
                        data-tip
                        data-for='tooltip'
                        className='fas fa-heart'
                    />
                </NavLink>
                <ReactTooltip id='tooltip' type='dark' effect='solid'>View favorites</ReactTooltip>
            </div>
        </div>
    )
};

export default Header;

