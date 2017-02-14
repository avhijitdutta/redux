import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router ,  browserHistory } from 'react-router';
import routes from './routes';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/admin-lte/dist/css/AdminLTE.min.css';
import '../node_modules/admin-lte/dist/css/skins/skin-blue.min.css';
import '../node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js';
import '../node_modules/admin-lte/bootstrap/js/bootstrap.min.js';
import '../node_modules/admin-lte/dist/js/app.min.js';
render(

		<Router history ={browserHistory} routes={routes}/>,
		document.getElementById('app')

);
