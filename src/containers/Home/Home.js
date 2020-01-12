import React, { Component } from "react";

import { Row, Col, Divider } from 'antd';

import Exercise from "../../components/UI/Exercise/Exercise";
import FeedbackModal from "../../components/UI/FeedbackModal/FeedbackModal";

class Home extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      pt: false
    }
    this.loginAsPatient = this.loginAsPatient.bind(this);
    this.loginAsPT = this.loginAsPT.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  loginAsPatient() {
    this.setState({
      loggedIn: true
    });
  }

  loginAsPT() {
    this.setState({
      loggedIn: true,
      pt: true
    });
  }

  logOut() {
    this.setState({
      loggedIn: false,
      pt: false
    })
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div className="container" >
          <h1>Welcome</h1>
          <Divider type="horizontal" />
          <button className="btn btn-lg btn-success" onClick={this.loginAsPatient}>Login as Patient</button>
          <button className="btn btn-lg btn-alert" onClick={this.loginAsPT}>Login as Physio Therapist</button>
        </div>
      );
    } else {
      if (this.state.pt) {
        return (
          <div className="container" >
            <h1>PhysioTherapist's Dashboard</h1>
            <button className="btn btn-lg btn-danger" onClick={this.logOut}>Log Out</button>
            <Divider type="horizontal" />
          </div>
        );
      } else {
      return (
        <div style={{paddingTop: "25px"}} className="container" >
          <h1>Exercises</h1>
          <Divider type="horizontal" />
          <button className="btn btn-lg btn-danger" onClick={this.logOut}>Log Out</button>
          <Row gutter={20}>
            <Col span={12}>
              <Exercise
                title={"Elbow Flexion"}
                description={"Stretch out your elbows"}
                source={
                  "https://www.saebo.com/wp-content/uploads/2015/10/elbowstretch-1.png"
                }
                workoutType={"elbow_flexion"}
              />
            </Col>
            <Col span={12}>
              <Exercise
                title={"Leg Flexion"}
                description={"Good for you hips"}
                source={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYBD07_yGx6YKUIUMrFL2v5ml8kygGIjrKsQFVzxf7dF9kv3L&s"
                }
                workoutType={"leg_flexion"}
              />
            </Col>
            <Col span={12}>
              <Exercise
                title={"Lateral Leg Raises"}
                description={"Because why not"}
                source={
                  "https://i.pinimg.com/originals/30/e9/a5/30e9a555b31473ebdf703b52cec82b88.png"
                }
                workoutType={"lateral_leg_raises"}
              />
            </Col>
            <Col span={12}>
              <Exercise
                title={"Knee Flexion"}
                description={"Arrow to the knee"}
                source={
                  "https://www.saebo.com/wp-content/uploads/2015/09/image061-300x260.png"
                }
                workoutType={"knee_flexion"}
              />
            </Col>
          </Row>
          <FeedbackModal />
        </div>
      );
    }
  }
  }
}

export default Home;
