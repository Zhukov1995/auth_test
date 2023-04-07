import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import store from './App/Store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

