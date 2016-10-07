import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import { createStore } from 'redux';
import Reducer from './Reducer';

// import store from './store';
import App from './components/App';

const appElement = document.getElementById('app');

let store = createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appElement
);