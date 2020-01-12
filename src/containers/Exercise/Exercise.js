import React, { Component } from "react";
import BackButton from "../../components/UI/BackButton/BackButton";

import { Row, Col } from "antd";

class Exercise extends Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <BackButton link="/" exact></BackButton>
          Image
        </Col>
        <Col span={12}>
          Exercise
          <p>Paragraph</p>
          Button
        </Col>
      </Row>
    );
  }
}

export default Exercise;
