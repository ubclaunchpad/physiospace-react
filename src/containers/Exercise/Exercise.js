import React, { Component } from "react";

import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Button, Divider } from 'antd';
import { Link } from 'react-router-dom';


const { Title, Paragraph } = Typography;

class Exercise extends Component {
  render() {
    return (
      <div>
        <div className="background" style={{backgroundImage: `url('https://www.saebo.com/wp-content/uploads/2015/10/elbowstretch-1.png')`}}>
        </div>
        <div style={{paddingTop: "15px"}} className="container">
          <Row style={{marginBottom: "15px"}}>
            <Col span={16}>
              <Title className="t">Arm Flexing</Title>
              <Paragraph className="p">Info</Paragraph>
            </Col>
            <Col span={8}>
              <Title className="t">15 Reps</Title>
              <Paragraph className="p">More Info</Paragraph>
            </Col>
          </Row>
          <Divider type="horizontal" />
          <Row style={{marginBottom: "15px"}}>
            <Col span={24}>
              <Title className="t">Description</Title>
              <Paragraph style={{marginBottom: "20px"}} className="p">This is a quick description! Lorem ipsum</Paragraph>
              <Title className="t">Special Instructions</Title>
              <Paragraph className="p">Do this in the morning please, thanks</Paragraph>
            </Col>
          </Row>
          <Divider type="horizontal" />
          <Row>
            <Col style={{marginTop: "10px", textAlign: "center"}} span={24}>
            <Link to="/workout">
              <Button icon="play-square" style={{marginRight: "20px"}} type="primary" size="large">
                Start
              </Button>
            </Link>
            <Button type="primary" icon="star" size="large">
              Progress
            </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Exercise;
