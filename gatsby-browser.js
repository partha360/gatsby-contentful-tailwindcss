import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

import appStore from './src/state/Store';

exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider Store={appStore}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  return ConnectedRouterWrapper;
};
