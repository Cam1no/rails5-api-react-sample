import React, { Component } from 'react';
import User from './user/index.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={User} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
