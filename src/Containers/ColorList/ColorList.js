import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ColorList extends Component {
    render() {
        console.log(this.props)
        return(
            <p>hi</p>
        )
    }
}

export const mapStateToProps = (state) => ({
    lipstick: state.lipstick
})

export default connect(mapStateToProps)(ColorList);