import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class CompanyPage extends React.Component{
  componentWillMount(){

    document.getElementById('body').className='hold-transition skin-blue layout-top-nav';
  }

  componentWillUnmount(){

    document.getElementById('body').className='';

  }

  render(){

    setTimeout(function () {
      $(window).resize();
    },100);

    return (
      <div className="wrapper">

        <header className="main-header">
          <a href="index2.html" className="logo">

            <span className="logo-mini"><b>A</b>LT</span>
            <span className="logo-lg"><b>Admin</b>LTE</span>
          </a>

          <nav className="navbar navbar-static-top" role="navigation">

            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">

                <li className="dropdown messages-menu">

                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-envelope-o"></i>
                    <span className="label label-success">4</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 4 messages</li>
                    <li>

                      <ul className="menu">
                        <li>
                          <a href="#">
                            <div className="pull-left">

                              <img src={require("../../../node_modules/admin-lte/dist/img/user2-160x160.jpg")} className="img-circle" alt="User Image"/>
                            </div>
                            <h4>
                              Support Team
                              <small><i className="fa fa-clock-o"></i> 5 mins</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                          </a>
                        </li>
                      </ul>

                    </li>
                    <li className="footer"><a href="#">See All Messages</a></li>
                  </ul>
                </li>



                <li className="dropdown notifications-menu">

                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell-o"></i>
                    <span className="label label-warning">10</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 10 notifications</li>
                    <li>

                      <ul className="menu">
                        <li>
                          <a href="#">
                            <i className="fa fa-users text-aqua"></i> 5 new members joined today
                          </a>
                        </li>

                      </ul>
                    </li>
                    <li className="footer"><a href="#">View all</a></li>
                  </ul>
                </li>

                <li className="dropdown tasks-menu">

                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-flag-o"></i>
                    <span className="label label-danger">9</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 9 tasks</li>
                    <li>

                      <ul className="menu">
                        <li>
                          <a href="#">

                            <h3>
                              Design some buttons
                              <small className="pull-right">20%</small>
                            </h3>

                            <div className="progress xs">

                              <div className="progress-bar progress-bar-aqua" style={{width: 20+'%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                <span className="sr-only">20% Complete</span>
                              </div>
                            </div>
                          </a>
                        </li>

                      </ul>
                    </li>
                    <li className="footer">
                      <a href="#">View all tasks</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown user user-menu">

                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">

                    <span className="hidden-xs">Alexander Pierce</span>
                  </a>
                  <ul className="dropdown-menu">

                    <li className="user-header">
                      <img src={require("../../../node_modules/admin-lte/dist/img/user2-160x160.jpg")} className="img-circle" alt="User Image"/>

                      <p>
                        Alexander Pierce - Web Developer
                        <small>Member since Nov. 2012</small>
                      </p>
                    </li>

                    <li className="user-body">
                      <div className="row">
                        <div className="col-xs-4 text-center">
                          <a href="#">Followers</a>
                        </div>
                        <div className="col-xs-4 text-center">
                          <a href="#">Sales</a>
                        </div>
                        <div className="col-xs-4 text-center">
                          <a href="#">Friends</a>
                        </div>
                      </div>

                    </li>

                    <li className="user-footer">
                      <div className="pull-left">
                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                      </div>
                      <div className="pull-right">
                        <a href="#" className="btn btn-default btn-flat">Sign out</a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="content-wrapper">

          <section className="content-header">
            <h1>
               Company Information

            </h1>
          </section>


          <section className="content">

            <div className="box box-primary">

              <div className="box-header with-border">
                <h3 className="box-title">Add Company Information</h3>
              </div>

              <form role="form">
                  <div className="box-body">
                      <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" className="form-control" placeholder="Enter Company Name"/>
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Enter Address"/>
                      </div>
                      <div className="form-group">
                        <label>Address2</label>
                        <input type="text" className="form-control" placeholder="Enter Address2 "/>
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" placeholder="Enter Phone Number."/>
                      </div>
                      <div className="form-group">
                        <label>Mobile</label>
                        <input type="text" className="form-control" placeholder="Enter Mobile Number."/>
                      </div>
                      <div className="form-group">
                        <label>City </label>
                        <input type="text" className="form-control" placeholder="Enter City "/>
                      </div>
                      <div className="form-group">
                        <label>State</label>
                        <input type="text" className="form-control" placeholder="Enter State "/>
                      </div>
                      <div className="form-group">
                        <label>PIN</label>
                        <input type="text" className="form-control" placeholder="Enter State "/>
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Enter State "/>
                      </div>
                      <div className="form-group">
                        <label>Tax</label>
                        <input type="text" className="form-control" placeholder="Enter State "/>
                      </div>

                  </div>
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
              </form>
            </div>

          </section>

        </div>

        <footer className="main-footer">

          <div className="pull-right hidden-xs">
            Anything you want
          </div>

          <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
        </footer>


        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
}

export default CompanyPage;
