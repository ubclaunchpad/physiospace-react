import React, { Component } from "react";
import { Card } from "antd";

import { Link } from 'react-router-dom';



const { Meta } = Card;

class Exercise extends Component {
  render() {
    return (
      <Link to="/exercise">
        <Card hoverable cover={<img alt="example" src={this.props.source} />}>
          <Meta title={this.props.title} description={this.props.description} />
        </Card>
      </Link>
    );
  }
}
export default Exercise;
