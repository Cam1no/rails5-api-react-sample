import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import UserList from './user/index.jsx';

class Routes extends Component {
  render(){
    return (
      <Router>
        <Route>
          <Route exact path='/' component={UserList} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
