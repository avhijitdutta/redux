import React from 'react';
import CheckBox from '../common/CheckBox';
import { browserHistory , Link } from 'react-router';
import * as loginAction from '../../action/loginAction';


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class LoginPage extends React.Component{

  constructor(props , context){
    super(props , context );

    this.state={
      login:{
        email:'',
        password:''
      }
    };

    this.onEmailChange=this.onEmailChange.bind(this);
    this.onPassChange=this.onPassChange.bind(this);
    this.createCompany=this.createCompany.bind(this);

  }

  componentWillMount(){

    document.getElementById('body').className='hold-transition login-page';
  }

  componentWillUnmount(){

    document.getElementById('body').className='';
  }

  createCompany(e){
    this.props.actions.loginSubmit(this.state.login);
    /*console.log(this.state.login);*/

 /*   e.preventDefault();

    browserHistory.push('/home');*/

  }

  goToRegistartion(){

    browserHistory.push('/registration');

  }

  onEmailChange(event){
    const userLogin=this.state.login;
    userLogin.email=event.target.value;
    this.setState({userLogin:userLogin});
  }

  onPassChange(event){
    const userLogin=this.state.login;
    userLogin.password=event.target.value;
    this.setState({userLogin:userLogin});
  }

  userRow(user,index){

    return <div key={index}> {user.email}</div>
  }

  render(){

    return(

      <div className="login-box">
        <div className="login-logo">
          <a ><b>Admin</b>LTE</a>
        </div>

        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
            <div>
              {this.props.login.map(this.userRow)}
              </div>
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" onChange={this.onEmailChange} value={this.state.login.email} />
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" onChange={this.onPassChange} value={this.state.login.password} />
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <CheckBox/>
              </div>

              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.createCompany}>
                  Sign In
                </button>
              </div>

            </div>
          <a>I forgot my password</a><br/>
          <a onClick={this.goToRegistartion} className="text-center">Register a new membership</a>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps) {
    return{
      login:state.login
    };
}

function mapDispatchToProps (dispatch) {
  return {
    actions:bindActionCreators(loginAction,dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
