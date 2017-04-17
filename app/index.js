/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import store from 'Redux/store';
import Router from './routes';
import './app.global.css';
import './index.less';

injectTapEventPlugin();

render(
  <AppContainer>
    <MuiThemeProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('root')
);
