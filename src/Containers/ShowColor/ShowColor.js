import React, { Component } from 'react';
import ColorCard from '../../Containers/ColorCard/ColorCard';

class ShowColor extends Component {
    render() {
        return(
            <div>
                <p>{this.props.color}</p>
            </div>
        )
    }
}

export default ShowColor;