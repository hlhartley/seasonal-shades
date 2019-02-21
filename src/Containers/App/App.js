import React, { Component } from 'react';
import '../../../src/main.scss';
import { Header } from '../../Components/Header/Header';
import { Navigation } from '../../Components/Navigation/Navigation';
import { Banner } from '../../Components/Banner/Banner';
import { setError } from '../../Actions';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Favorites } from '../../Containers/Favorites/Favorites';

class App extends Component {
  constructor() {
    super();
    this.state = {
      eyeshadow: {},
      lipstick: {},
      blush: {},
      nail_polish: {},
      eyeshadowColors: {},
      lipstickColors: {},
      blushColors: {},
      nail_polishColors: {},
      inputValue: '',
    };
  };

  async componentDidMount() {
    await this.fetchMakeup('blush');
    await this.fetchMakeup('lipstick');
    await this.fetchMakeup('eyeshadow');
    await this.fetchMakeup('nail_polish');
    debugger
  };

  fetchMakeup = async (path) => {
    try {
      const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${path}`;
      const response = await fetch(url);
      const result = await response.json();
      const colors = {};
      const items = {};
  
      result.forEach((item) => {
        item.product_colors.forEach(color => {
          // colors[color.hex_value] = item.id;
          if (!colors[color.hex_value]) {
            colors[color.hex_value] = [];
          } 
          colors[color.hex_value].push(item.id);
        })
        items[item.id] = item;
      });
      this.setState({ [`${path}`]: items })
      this.setState({ [`${path}Colors`]: colors })
    } catch(error) {
      this.props.setError(error)
    }
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  hexCodeInput = (e) => {
    e.preventDefault();
    const hexCode = this.state.inputValue;

    const productIDs = this.state.nail_polishColors[hexCode];
    productIDs.forEach(productID => {
      const product = this.state.nail_polish[productID];
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

const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch(setError(error))  
});

export default withRouter(connect(null, mapDispatchToProps)(App));
