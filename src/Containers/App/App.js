import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import '../../../src/main.scss';
import Header from '../../Components/Header/Header';
import Navigation from '../Navigation/Navigation';
import Banner from '../../Components/Banner/Banner';
import ColorList from '../ColorList/ColorList';
import Favorites from '../../Containers/Favorites/Favorites';
import ShowColor from '../ShowColor/ShowColor';
import PageNotFound from '../../Components/PageNotFound/PageNotFound';
import Search from '../../Components/Search/Search';
import { fetchMakeup } from '../../Thunks/fetchMakeup';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      currentType: 'eyeshadow',
      colorInputValue: '',
    };
  };

  async componentDidMount() {
    await this.props.fetchMakeup('eyeshadow')
  }

  handleChange = (e) => {
    this.setState({ colorInputValue: e.target.value.toLowerCase() })
  }

  updateCurrentType = (type) => {
    this.setState({ currentType: type })
  }

  render() {
    let { currentType, colorInputValue } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Navigation updateCurrentType={this.updateCurrentType} />
          <Banner type={currentType}/>
          <Search handleChange={this.handleChange} type={currentType}/>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/eyeshadow'/>
            </Route>
            <Route exact path='/favorites' render={()=> <Favorites type={currentType}/>}/>
            <Route exact path={`/${currentType}`} render={()=> <ColorList type={currentType} colorInput={colorInputValue}/>}/>
            <Route path={`/${currentType}/:color`} render={({ match }) => {
                return <ShowColor color={match.params.color} type={currentType}/>
            }} />
            <Route path = '*' component = {PageNotFound} />
          </Switch>
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
  fetchMakeup: (path) => dispatch(fetchMakeup(path))
});

App.propTypes = {
  nail_polishColors: PropTypes.array,
  lipstickColors: PropTypes.array,
  blushColors: PropTypes.array,
  eyeshadowColors: PropTypes.array,
  allColors: PropTypes.object,
  fetchMakeup: PropTypes.func,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
