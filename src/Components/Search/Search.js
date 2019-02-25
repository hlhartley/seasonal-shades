import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
    return(
        <div className='color-search'>
            <i className="fas fa-search"></i>
            <input type="text" onChange={props.handleChange} placeholder='Search by color name' className='search-input'></input>
        </div>
    )
};

Search.propTypes = {
    handleChange: PropTypes.func,
}

export default Search
