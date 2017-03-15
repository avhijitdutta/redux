import React from 'react';
import $ from 'jquery';
import HeaderComponent from '../common/HeaderComponent';
import FooterComponent from '../common/FooterComponent';

class HomePage extends React.Component{
  componentWillMount(){

    document.getElementById('body').className='hold-transition skin-blue sidebar-mini';
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
  <HeaderComponent/>



  <div className="content-wrapper">

    <section className="content-header">
      <h1>
        Page Header
        <small>Optional description</small>

      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
        <li className="active">Here</li>
      </ol>
    </section>


    <section className="content">



    </section>

  </div>

  <FooterComponent/>

  <aside className="control-sidebar control-sidebar-dark">

    <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
      <li className="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></a></li>
      <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears"></i></a></li>
    </ul>

    <div className="tab-content">

      <div className="tab-pane active" id="control-sidebar-home-tab">
        <h3 className="control-sidebar-heading">Recent Activity</h3>
        <ul className="control-sidebar-menu">
          <li>
            <a href="javascript:;">
              <i className="menu-icon fa fa-birthday-cake bg-red"></i>

              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>

                <p>Will be 23 on April 24th</p>
              </div>
            </a>
          </li>
        </ul>


        <h3 className="control-sidebar-heading">Tasks Progress</h3>
        <ul className="control-sidebar-menu">
          <li>
            <a href="javascript:;">
              <h4 className="control-sidebar-subheading">
                Custom Template Design
                <span className="pull-right-container">
                  <span className="label label-danger pull-right">70%</span>
                </span>
              </h4>

              <div className="progress progress-xxs">
                <div className="progress-bar progress-bar-danger" style={{width: 70+'%'}}></div>
              </div>
            </a>
          </li>
        </ul>


      </div>


      <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>


      <div className="tab-pane" id="control-sidebar-settings-tab">
          <h3 className="control-sidebar-heading">General Settings</h3>

          <div className="form-group">
            <label className="control-sidebar-subheading">
              Report panel usage
              <input type="checkbox" className="pull-right"/>
            </label>

            <p>
              Some information about this general settings option
            </p>
          </div>

      </div>

    </div>
  </aside>

  <div className="control-sidebar-bg"></div>
  </div>
		);
	}
}

export default HomePage;
