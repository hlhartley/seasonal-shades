import React, { Component } from 'react';
import '../../../src/main.scss';
import { Header } from '../../Components/Header/Header';
import Navigation from '../Navigation/Navigation';
import { Banner } from '../../Components/Banner/Banner';
import ColorList from '../ColorList/ColorList';
import { setError } from '../../Actions';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Favorites } from '../../Containers/Favorites/Favorites';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  hexCodeInput = (e) => {
    e.preventDefault();
    const hexCode = this.state.inputValue;
    // console.log(this.props.nailpolishColors)
    const productIDs = this.props.nailpolishColors[hexCode];
    productIDs.forEach(productID => {
      const product = this.props.nailpolish[productID];
      // console.log(product)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Navigation />
          <Banner />
          <ColorList />
          <Route exact path='/favorites' render={()=> <Favorites />}/>
        </header>
        <p>Enter a hex code:</p>
        <form onSubmit={this.hexCodeInput}>
          <input type="text" onChange={this.handleChange}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  nailpolish: state.nailpolish,
  nailpolishColors: state.nailpolishColors,
});

const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch(setError(error)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
