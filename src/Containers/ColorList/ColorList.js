import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ColorList extends Component {
    render() {
        if (Object.keys(this.props.nail_polishColors).length > 1) {
            return(
                <div className='color-container'>
                    {Object.keys(this.props.nail_polishColors).map((hexcode) => {
                            return <div className='color' style={{ backgroundColor: hexcode}}><i class="far fa-heart"></i><p>{this.props.allColors[hexcode]}</p></div>
                    })
                }
                </div>)
        } else {
            return(
                <p>colorList</p>
            )
        }
    }
}

export const mapStateToProps = (state) => ({
    allColors: state.allColors,
    lipstickColors: state.lipstickColors,
    blushColors: state.blushColors,
    eyeshadowColors: state.eyeshadowColors,
    nail_polishColors: state.nailpolishColors,
})

export default connect(mapStateToProps)(ColorList);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// export class ColorList extends Component {
//     render() {
//         if (Object.keys(this.props.lipstick).length > 1) {
//             let allLipsticks = []
//             Object.values(this.props.lipstick).forEach((lipstick) => {
//                 lipstick.product_colors.forEach((color) => {
//                     allLipsticks.push(color)
//                 })
//             })
//             // let sortedLipsticks = allLipsticks.sort((a, b) => {
//             //     return a.colour_name - b.colour_name
//             // })
//             console.log(allLipsticks)
//             allLipsticks.map((lipstick) => {
//                 return (
//                     <p>{lipstick.hex_value}</p>
//                 )
//             })
//         } else {
//             return(
//                 <p>hi</p>
//             )
//         }
//     }
// }

// export const mapStateToProps = (state) => ({
//     lipstick: state.lipstick,
// })

// export default connect(mapStateToProps)(ColorList);




// if (Object.keys(this.props.nail_polish).length > 1) {
//     return(
//         <div className='color-container'>
//             {Object.values(this.props.nail_polish).map((nail_polish) => {
//                 return nail_polish.product_colors.map((color) => {
//                     return <div className='color' style={{ backgroundColor: color.hex_value}}>{color.colour_name}</div>
//                 })
//             })
//         }
//         </div>
//     )
// } else {
//     return(
//         <p>hi</p>
//     )
// }