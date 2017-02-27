import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router ,  browserHistory } from 'react-router';
import routes from './routes';
import './styles/style.css';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/admin-lte/dist/css/AdminLTE.min.css';
import '../node_modules/admin-lte/dist/css/skins/skin-blue.min.css';
import '../node_modules/admin-lte/bootstrap/js/bootstrap.min.js';
import '../node_modules/admin-lte/dist/js/app.min.js';
import '../node_modules/admin-lte/plugins/iCheck/icheck.min.js';
import '../node_modules/admin-lte/plugins/iCheck/all.css';

import configureStore from './store/configureStore'
import {Provider} from 'react-redux';


const store = configureStore();
render(
  <Provider store={store}>
		<Router history ={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
