import React, { Component } from "react";
import { Card } from "antd";

const { Meta } = Card;

class Exercise extends Component {
  render() {
    return (
      <div>
        <Card hoverable cover={<img alt="example" src={this.props.source} />}>
          <Meta title={this.props.title} description={this.props.description} />
        </Card>
      </div>
    );
  }
}
export default Exercise;
