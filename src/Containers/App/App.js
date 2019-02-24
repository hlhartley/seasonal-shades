import React, { Component } from 'react';
import '../../../src/main.scss';
import Header from '../../Components/Header/Header';
import Navigation from '../Navigation/Navigation';
import Banner from '../../Components/Banner/Banner';
import ColorList from '../ColorList/ColorList';
import { setError, setAllColors } from '../../Actions';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Favorites } from '../../Containers/Favorites/Favorites';
import ShowColor from '../ShowColor/ShowColor';
import { fetchMakeup } from '../../Thunks/fetchMakeup';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      currentType: 'eyeshadow',
      inputValue: '',
    };
  };

  // componentDidMount() {
  //   this.props.fetchMakeup('eyeshadow')
  // }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  updateCurrentType = (type) => {
    this.setState({ currentType: type })
  }

  // hexCodeInput = (e) => {
  //   e.preventDefault();
  //   const hexCode = this.state.inputValue;
  //   const color = this.props.allColors[hexCode];
  //     console.log(color)
  // }

  findColor = () => {
    const colorInput = this.state.inputValue;

  }

  render() {
    // console.log(this.props[this.state.currentType+'Colors'])
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
          {/* <ShowColor /> */}
          <Switch>
            <Route exact path='/'>
              <Redirect to='/eyeshadow'/>
            </Route>
            <Route exact path='/favorites' render={()=> <Favorites />}/>
            <Route exact path={`/${this.state.currentType}`} render={()=> <ColorList type={this.state.currentType}/>}/>
          </Switch>
          <Route path={`/${this.state.currentType}/:color`} render={({ match }) => {
              return <ShowColor color={match.params.color} type={this.state.currentType}/>
          }} />
        </header>
      </div>
    )
  };
};

export const mapStateToProps = (state) => ({
  nail_polishColors: state.nailpolishColors,
  lipstickColors: state.lipstickColors,
  blushColors: state.blushColors,
  eyeshadowColors: state.eyeshadowColors,
  allColors: state.allColors,
});

export const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch(setError(error)),
  fetchMakeup: (path) => dispatch(fetchMakeup(path))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
