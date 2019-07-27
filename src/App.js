import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import history from './history';
import SiteNavbar from './components/SiteNavbar'
import LoginForm from './components/LoginForm'
import Logout from './components/Logout'

import './App.css';

function App() {
  return (
    <Router history={history}>
      <Fragment>
        <SiteNavbar />
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route path="/login/" component={LoginForm} />
          <Route path="/logout/" component={Logout} />
        </Switch>
      </Fragment>
    </Router> 
  );
}

export default App;
