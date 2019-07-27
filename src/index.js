import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import LoginForm from './components/LoginForm'
import history from './history';
import configureStore from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        {/* <SiteNavbar /> */}
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/login/" component={LoginForm} />
          {/* <Route path="/logout/" component={Logout} /> */}
        </Switch>
      </div>
        </Router> 
  </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
