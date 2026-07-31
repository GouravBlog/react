import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import CounterProvider from './Context/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounterProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CounterProvider>
);


