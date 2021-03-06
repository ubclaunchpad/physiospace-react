import React, { Component } from "react";
import { Button, Icon } from "antd";
import { NavLink } from "react-router-dom";

class BackButton extends Component {
  render() {
    return (
      <NavLink className="back" to={this.props.link} exact={this.props.exact}>
        <i aria-label="icon: left" class="anticon anticon-left"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="left" width="1.5em" height="1.5em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></i>
      </NavLink>
    );
  }
}
export default BackButton;
