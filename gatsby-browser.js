import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import appStore from './src/state/Store';

// eslint-disable-next-line react/prop-types
exports.replaceRouterComponent = ({ history }) => ({ children }) => (
  <Provider Store={appStore}>
    <Router history={history}>{children}</Router>
  </Provider>
);
