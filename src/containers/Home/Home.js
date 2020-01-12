import React, { Component } from "react";

import { Row, Col, Divider } from 'antd';

import Exercise from "../../components/UI/Exercise/Exercise";
import FeedbackModal from "../../components/UI/FeedbackModal/FeedbackModal";

class Home extends Component {
  render() {
    return (
      <div style={{paddingTop: "25px"}} className="container" >
        <h1>Exercises</h1>
        <Divider type="horizontal" />
        <Row gutter={20}>
          <Col span={12}>
            <Exercise
              title={"Title"}
              description={"desrciption"}
              source={
                "https://www.saebo.com/wp-content/uploads/2015/10/elbowstretch-1.png"
              }
            />
          </Col>
          <Col span={12}>
            <Exercise
              title={"Title"}
              description={"desrciption"}
              source={
                "https://www.saebo.com/wp-content/uploads/2015/10/elbowstretch-1.png"
              }
            />
          </Col>
          <Col span={12}>
            <Exercise
              title={"Title"}
              description={"desrciption"}
              source={
                "https://www.saebo.com/wp-content/uploads/2015/10/elbowstretch-1.png"
              }
            />
          </Col>
          <Col span={12}>
            <Exercise
              title={"Title"}
              description={"desrciption"}
              source={
                "https://www.saebo.com/wp-content/uploads/2015/10/elbowstretch-1.png"
              }
            />
          </Col>
        </Row>
        <FeedbackModal />
      </div>
    );
  }
}

export default Home;
