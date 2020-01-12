import React, { Component } from "react";
import { Button, Icon } from "antd";
import { NavLink } from "react-router-dom";

class BackButton extends Component {
  render() {
    return (
      <NavLink to={this.props.link} exact={this.props.exact}>
        <Icon type="left" />
        <Button type="primary"> Back </Button>
      </NavLink>
    );
  }
}
export default BackButton;
