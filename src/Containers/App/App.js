import React, { Component } from 'react';
import '../../../src/main.scss';
import { Header } from '../../Components/Header/Header';
import { Navigation } from '../../Components/Navigation/Navigation';
import { Banner } from '../../Components/Banner/Banner';
import { setError } from '../../Actions';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Favorites } from '../../Containers/Favorites/Favorites';
import { fetchMakeup } from '../../Thunks/fetchMakeup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  };

  async componentDidMount() {
    await this.props.fetchMakeup('lipstick');
    await this.props.fetchMakeup('blush');
    await this.props.fetchMakeup('eyeshadow');
    await this.props.fetchMakeup('nail_polish');
    debugger
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  hexCodeInput = (e) => {
    e.preventDefault();
    const hexCode = this.state.inputValue;
    console.log(this.props.nailpolishColors)
    const productIDs = this.props.nailpolishColors[hexCode];
    productIDs.forEach(productID => {
      const product = this.props.nailpolish[productID];
      console.log(product)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Navigation />
          <Banner />
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
  setError: (error) => dispatch(setError(error)) ,
  fetchMakeup: (path) => dispatch(fetchMakeup(path)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
