import React, { Component } from 'react';
import '../../../src/main.scss';
import { Header } from '../../Components/Header/Header';
import Navigation from '../Navigation/Navigation';
import { Banner } from '../../Components/Banner/Banner';
import ColorList from '../ColorList/ColorList';
import { setError, getAllColors } from '../../Actions';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Favorites } from '../../Containers/Favorites/Favorites';
import { fetchAllColors } from '../../Thunks/fetchMakeup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentType: '',
      inputValue: '',
    };
  };

  componentDidMount = () => {
    this.props.fetchAllColors()
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  updateCurrentType = (type) => {
    this.setState({ currentType: type })
  }

  hexCodeInput = (e) => {
    e.preventDefault();
    const hexCode = this.state.inputValue;
    const color = this.props.allColors[hexCode];
      console.log(color)
  }

  findColor = () => {
    const colorInput = this.state.inputValue;

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Navigation updateCurrentType={this.updateCurrentType}/>
          <Banner />
          <div className='hexcode-search'>
            <form onSubmit={this.hexCodeInput}>
                <input type="text" onChange={this.handleChange} placeholder='# + 6-digit hexcode'></input>
                <input type="submit" value="Submit" className='submit-btn'></input>
            </form>
          </div>
          <ColorList />
          <Route exact path='/favorites' render={()=> <Favorites />}/>
        </header>
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  nailpolish: state.nailpolish,
  nailpolishColors: state.nailpolishColors,
  allColors: state.allColors,
});

const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch(setError(error)),
  fetchAllColors: () => dispatch(fetchAllColors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
