import React from 'react';
import ReactDOM from 'react-dom/client';
import store from 'redux/store';
import { Provider } from 'react-redux'

import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={1000}/>
        <App />
    </Provider>
  </React.StrictMode>
)