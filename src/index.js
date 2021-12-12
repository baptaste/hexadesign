// npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// local
import store from 'src/store';
import App from 'src/containers/App';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);