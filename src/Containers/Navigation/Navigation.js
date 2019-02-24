import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMakeup } from '../../Thunks/fetchMakeup';
import { NavLink } from 'react-router-dom';

export class Navigation extends Component {
    state = {
        activeLink: 'eyeshadow',
    }

    handleClick = async (type) => {
        this.setState({activeLink: type})
        this.props.updateCurrentType(type)
        await this.props.fetchMakeup(type)
    }

    render() {
        return (
            <div className='navigation-container'>
                <NavLink to='/eyeshadow' className={this.state.activeLink === 'eyeshadow' ? 'is-active' : 'not-active'} onClick={() => this.handleClick('eyeshadow')}>EYES</NavLink>
                <NavLink to='/lipstick' className={this.state.activeLink === 'lipstick' ? 'is-active' : 'not-active'} onClick={() => this.handleClick('lipstick')}>LIPS</NavLink>
                <NavLink to='/blush' className={this.state.activeLink === 'blush' ? 'is-active' : 'not-active'} onClick={() => this.handleClick('blush')}>CHEEKS</NavLink>
                <NavLink to='/nail_polish' className={this.state.activeLink === 'nail_polish' ? 'is-active' : 'not-active'} onClick={() => this.handleClick('nail_polish')}>NAILS</NavLink>
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    fetchMakeup: (path) => dispatch(fetchMakeup(path)),
});

export default connect(null, mapDispatchToProps)(Navigation)
