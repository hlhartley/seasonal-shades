import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const numberOfFavorties = () => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        return Object.keys(JSON.parse(savedFavorites)).length;
    } else {
        return 0;
    }
}

const Header = (props) => {
    return(
        <div className='header-container'>
            <h1 className='title'>Seasonal Shades</h1>
            <div className='user-info'>
                <p><b># Favorites:</b> <u>{numberOfFavorties()}</u></p>
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

export const mapStateToProps = (state) => ({
    favorites: state.favorites,
});

Header.propTypes = {
    favorites: PropTypes.object,
};

export default connect(mapStateToProps)(Header);

