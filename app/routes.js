import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Timer from 'container/timer';
import Setup from 'container/setup';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/timer/:section" component={Timer} />
          <Route path="/timer" component={Timer} />
          <Route path="/setup" component={Setup} />
          <Redirect from="*" to="/setup" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
