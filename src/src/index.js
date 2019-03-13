import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '_Utils_/themes/themes';
import store, { history } from './store/store';

import App from './App';




ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </MuiThemeProvider>
      </Router>
    </Provider>
  ),
  document.getElementById('root'),
);

module.hot.accept();
