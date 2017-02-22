import React from 'react';
import { Route ,  IndexRoute } from 'react-router';
import App from  './Components/App';
import HomePage from  './Components/home/HomePage';
import AboutPage from  './Components/about/AboutPage';
import LoginPage from  './Components/login/loginPage';
import RegistrationPage from  './Components/registration/RegistrationPage';
import CompanyPage from  './Components/company/companyPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={LoginPage} />
		<Route path="home" component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="registration" component={RegistrationPage} />
    <Route path="company" component={CompanyPage} />
	</Route>
);
