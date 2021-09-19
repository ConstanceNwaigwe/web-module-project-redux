import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

import reducer from './reducers';

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const appStore = createStore(reducer)

ReactDOM.render(
  <Router>
    <Provider store={appStore}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
