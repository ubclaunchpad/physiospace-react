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
        <div className="container" >
          <h1>Exercises</h1>
          <Divider type="horizontal" />
          <button className="btn btn-lg btn-danger" onClick={this.logOut}>Log Out</button>
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
  }
}

export default Home;
