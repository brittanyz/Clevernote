import { HashRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter >
      <div className="root">
        <App />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
