import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMakeup } from '../../Thunks/fetchMakeup';
import { NavLink } from 'react-router-dom';

export class Navigation extends Component {

    handleClick = async (type) => {
        this.props.updateCurrentType(type)
        await this.props.fetchMakeup(type)
    }

    render() {
        return (
            <div className='navigation-container'>
                <NavLink to='/eyeshadow' onClick={() => this.handleClick('eyeshadow')}>EYES</NavLink>
                <NavLink to='/lipstick' onClick={() => this.handleClick('lipstick')}>LIPS</NavLink>
                <NavLink to='/blush' onClick={() => this.handleClick('blush')}>CHEEKS</NavLink>
                <NavLink to='/nail_polish' onClick={() => this.handleClick('nail_polish')}>NAILS</NavLink>
            </div>
        )
    }
}
    // console.log(props)

const mapDispatchToProps = (dispatch) => ({
    fetchMakeup: (path) => dispatch(fetchMakeup(path)),
});

export default connect(null, mapDispatchToProps)(Navigation)
