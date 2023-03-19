import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Redux Toolkit
import { Provider } from 'react-redux';
import { store } from './store/reduxStore/store'

//STYLING
import './global.css';

// This is for React 18, which introduces a new root API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
