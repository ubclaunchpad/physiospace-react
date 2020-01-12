import React, { Component } from "react";
import { Card } from "antd";
import classes from "./Exercise.css";

const { Meta } = Card;

class Exercise extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{width: 50, height: 60 }}>
        <Card hoverable cover={<img alt="example" src={this.props.source} />}>
          <Meta title={this.props.title} description={this.props.description} />
        </Card>
      </div>
    );
  }
}
export default Exercise;
