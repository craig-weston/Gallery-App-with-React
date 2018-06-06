import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import Process from './components/Process';
import NotFound from './components/NotFound';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      keyword: 'Sea'
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="Container">
          <Route exact path="/" render={props => <SearchForm onSearch={keyword => this.setState({ keyword })} /> } />
          <Route path="/" component={MainNav} />
          <Switch>
            <Route exact path="/" render={props => <Process keyword={this.state.keyword} /> } />
            <Route exact path="/:tag" component={Process} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
