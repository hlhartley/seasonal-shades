import React, { Component } from 'react';
import '../../../src/main.scss';
import { Header } from '../../Components/Header/Header';
import { Navigation } from '../../Components/Navigation/Navigation';
import { Banner } from '../../Components/Banner/Banner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      eyeshadow: [],
      lipstick: [],
      blush: [],
      nail_polish: [],
      eyeshadowColors: [],
      lipstickColors: [],
      blushColors: [],
      nail_polishColors: [],
    };
  };

  componentDidMount() {
    this.fetchMakeup('eyeshadow');

  };

  fetchMakeup = async (path) => {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${path}`;
    const response = await fetch(url);
    const result = await response.json();
    const colors = []
    result.map(item => {
      return item.product_colors.map(color => {
        return colors.push(color)
      });
    });
    const items = result.map((item) => {
      return item
    });
    this.setState({ [`${path}`]: items })
    this.setState({ [`${path}Colors`]: colors })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Navigation />
          <Banner />
          App
        </header>
      </div>
    )
  };
};

export default App;
