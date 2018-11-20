import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App/App';
import { Provider } from 'react-redux';
import configureStore from '../src/redux/store/configureStore'
import * as serviceWorker from './serviceWorker';
import Router from '../src/components/Router/Router'
import {BrowserRouter} from 'react-router-dom';

// initilize the store
const store = configureStore()

ReactDOM.render(
<provider store={store}>
  <BrowserRouter>
    <Router />
  </BrowserRouter>
</provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
