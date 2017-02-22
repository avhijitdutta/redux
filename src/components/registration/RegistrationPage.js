/**
 * Created by USER on 2/19/2017.
 */
import React from 'react';
import { Link } from 'react-router';
import CheckBox from '../common/CheckBox';
import { browserHistory } from 'react-router';

class RegistrationPage extends React.Component{
  componentWillMount(){

    document.getElementById('body').className='hold-transition login-page';
  }

  componentWillUnmount(){

    document.getElementById('body').className='';
    //
    //browserHistory.push('/some/path');
  }
  createCompany(e){

    e.preventDefault();

    browserHistory.push('/home');

  }


  render(){

    return (
      <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>

        <div className="register-box-body">
          <p className="login-box-msg">Register a new membership</p>

          <form action="../../index.html" method="post">
            <div className="form-group has-feedback">
              <input type="text" className="form-control" placeholder="Full name"/>
                <span className="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email"/>
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password"/>
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Retype password"/>
                <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <CheckBox/>
              </div>

              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
              </div>

            </div>
          </form>

          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign up using
              Facebook</a>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign up using
              Google+</a>
          </div>

          <a href="login.html" className="text-center">I already have a membership</a>
        </div>

      </div>
    );
  }
}

export default RegistrationPage;
