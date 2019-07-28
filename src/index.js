import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { authenticated, unauthenticated } from './actions/actionCreators'
import * as serviceWorker from './serviceWorker';

const store = configureStore();

localStorage.getItem('jwt') ? store.dispatch(authenticated()) : store.dispatch(unauthenticated());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
