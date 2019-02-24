import React, { Component } from 'react';
import { connect } from 'react-redux';

class Favorites extends Component {
    render() {
        let favoritedColors = Object.values(this.props.allColors).filter((color) => {
            return color.isFavorite === true
        })
        console.log(Object.values(this.props.allColors).isFavorite == true)
        return(
            <div>
                <p>Favorite Colors</p>
            </div>
        )
    }
}


export const mapStateToProps = (state) => ({
    allColors: state.allColors,
});

export default connect(mapStateToProps)(Favorites);