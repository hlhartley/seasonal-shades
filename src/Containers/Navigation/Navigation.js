import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMakeup } from '../../Thunks/fetchMakeup';

export class Navigation extends Component {

    handleClick = async (type) => {
        this.props.updateCurrentType(type)
        await this.props.fetchMakeup(type)
    }

    render() {
        return (
            <div className='navigation-container'>
                <button onClick={() => this.handleClick('eyeshadow')}>EYES</button>
                <button onClick={() => this.handleClick('lipstick')}>LIPS</button>
                <button onClick={() => this.handleClick('blush')}>CHEEKS</button>
                <button onClick={() => this.handleClick('nail_polish')}>NAILS</button>
            </div>
        )
    }
}
    // console.log(props)

const mapDispatchToProps = (dispatch) => ({
    fetchMakeup: (path) => dispatch(fetchMakeup(path)),
});

export default connect(null, mapDispatchToProps)(Navigation)
