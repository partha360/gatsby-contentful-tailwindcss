import React from 'react';
import { Provider, useStaticRendering } from 'mobx-react';
import { renderToString } from 'react-dom/server';
import appStore from './src/state/Store';

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  useStaticRendering(true);

  const ProviderBody = () => (
    <Provider Store={appStore}>{bodyComponent}</Provider>
  );

  replaceBodyHTMLString(renderToString(<ProviderBody />));
};
