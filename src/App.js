import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import history from './history';
import SiteNavbar from './components/SiteNavbar'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import Logout from './components/Logout'
import Todos from './components/Todos';

function App() {
  return (
    <Router history={history}>
      <Fragment>
        <SiteNavbar />
        <Switch>
          <Route exact path='/' component={Todos} />
          <Route path='/app/:filter?' render={props => <Todos {...props} />} />
          <Route path="/login/" component={LoginForm} />
          <Route path="/signup/" component={RegistrationForm} />
          <Route path="/logout/" component={Logout} />
        </Switch>
      </Fragment>
    </Router> 
  );
}

export default App;
