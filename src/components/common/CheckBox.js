import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

class CheckBox extends  React.Component{

  componentDidMount(){
    const { checkBox } = this.refs;

    $(checkBox).iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  }

  render(){

    return(
      <div className="checkbox icheck">
        <label>
          <input ref="checkBox" type="checkbox"/> Remember Me
        </label>
      </div>
    );

  }

}

export default CheckBox;
