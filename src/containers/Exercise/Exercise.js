import React, { Component } from "react";
import BackButton from "../../components/UI/BackButton/BackButton";

import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Button, Divider } from 'antd';
import { Link } from 'react-router-dom';


const { Title, Paragraph } = Typography;

class Exercise extends Component {
  constructor(props) {
    super(props);

    switch(props.match.params.workoutType) {
      case "elbow_flexion":
        this.state = {
          title: "Elbow Flexion",
          info: "Strech your elbows",
          reps: "40 reps or 4 mins",
          moreInfo: "Make sure to take your time with each rep"
        }
        break;
      case "leg_flexion":
        this.state = {
          title: "Leg Flexion",
          info: "Strech your leg",
          reps: "40 reps or 4 mins",
          moreInfo: "Make sure to take your time with each rep"
        }
        break;
      case "lateral_leg_raises":
        this.state = {
          title: "Lateral Leg Raises",
          info: "Strech your legs",
          reps: "40 reps or 4 mins",
          moreInfo: "Make sure to take your time with each rep"
        }
        break;
      case "knee_flexion":
        this.state = {
          title: "Knee Flexion",
          info: "Strech your knees",
          reps: "40 reps or 4 mins",
          moreInfo: "Make sure to take your time with each rep"
        }
        break;
      default:
        this.state = {
          title: "Elbow Flexion",
          info: "Strech your elbows",
          reps: "40 reps or 4 mins",
          moreInfo: "Make sure to take your time with each rep"
        }
    }

  }
  render() {
    return (
      <div>
        <BackButton link="/" exact></BackButton>
        <div className="background" style={{backgroundImage: `url('https://www.saebo.com/wp-content/uploads/2015/10/elbowstretch-1.png')`}}>
        </div>
        <div style={{paddingTop: "15px"}} className="container">
          <Row style={{marginBottom: "15px"}}>
            <Col span={16}>
    <Title className="t">{this.state.title}</Title>
    <Paragraph className="p">{this.state.info}</Paragraph>
            </Col>
            <Col span={8}>
              <Title className="t">{this.state.reps}</Title>
              <Paragraph className="p">{this.state.moreInfo}</Paragraph>
            </Col>
          </Row>
          <Divider type="horizontal" />
          <Row style={{marginBottom: "15px"}}>
            <Col span={24}>
              <Title className="t">Description</Title>
              <Paragraph style={{marginBottom: "20px"}} className="p">Try to focus on the movements</Paragraph>
              <Title className="t">Special Instructions</Title>
              <Paragraph className="p">Do this in the morning please, thanks</Paragraph>
            </Col>
          </Row>
          <Divider type="horizontal" />
          <Row>
            <Col style={{marginTop: "10px", textAlign: "center"}} span={24}>
            <Link to={`/workout/${this.props.match.params.workoutType}`}>
              <Button icon="play-square" style={{marginRight: "20px"}} type="primary" size="large">
                Start
              </Button>
            </Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Exercise;
