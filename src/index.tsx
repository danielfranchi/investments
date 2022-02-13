import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store } from './store/store';
import { Provider } from 'react-redux';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
