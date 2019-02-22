import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMakeup } from '../../Thunks/fetchMakeup';

export class Navigation extends Component {
    render() {
        return (
            <div className='navigation-container'>
                <button onClick={async () => await this.props.fetchMakeup('eyeshadow')}>EYES</button>
                <button onClick={async () => await this.props.fetchMakeup('lipstick')}>LIPS</button>
                <button onClick={async () => await this.props.fetchMakeup('blush')}>CHEEKS</button>
                <button onClick={async () => await this.props.fetchMakeup('nail_polish')}>NAILS</button>
            </div>
        )
    }
}
    // console.log(props)

const mapDispatchToProps = (dispatch) => ({
    fetchMakeup: (path) => dispatch(fetchMakeup(path)),
});

export default connect(null, mapDispatchToProps)(Navigation)
