import React, { Component } from 'react';
import '../../../src/main.scss';
import { Header } from '../../Components/Header/Header';
import { Navigation } from '../../Components/Navigation/Navigation';
import { Banner } from '../../Components/Banner/Banner';

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
      inputValue: ''
    };
  };

  componentDidMount() {
    this.fetchMakeup('eyeshadow');

  };

  fetchMakeup = async (path) => {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${path}`;
    const response = await fetch(url);
    const result = await response.json();
    const colors = {};
    const items = {};

    result.forEach((item) => {
      item.product_colors.forEach(color => {
        colors[color.hex_value] = item.id;
        // if (!colors[color.hex_value]) {
        //   colors[color.hex_value] = [];
        // } 
        // colors[color.hex_value].push(item.id);
      })
      items[item.id] = item;
    })

    this.setState({ [`${path}`]: items })
    this.setState({ [`${path}Colors`]: colors })
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  hexCodeInput = (e) => {
    e.preventDefault();
    const hexCode = this.state.inputValue;
    const productID = this.state.eyeshadowColors[hexCode];
    const product = this.state.eyeshadow
    console.log(product[productID])
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Navigation />
          <Banner />
          App
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

export default App;
