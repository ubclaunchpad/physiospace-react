import React, { Component } from "react";

import { Row, Col, Divider, Button } from 'antd';

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
        <div className="container landing" >
          <h1 style={{color: "white", fontSize: "54px"}}>Welcome</h1>
          <Button type="primary" size="large" className="home-button" onClick={this.loginAsPatient}>Login as Patient</Button>
          <Button style={{marginTop: "15px" }} type="primary" size="large" className="home-button" onClick={this.loginAsPT}>Login as Physio Therapist</Button>
        </div>
      );
    } else {
      if (this.state.pt) {
        return (
          <div className="container" >
            <Row >
            <Col span={12}>
              <h1>Dashboard</h1> 
            </Col>
            <Col span={12}>
              <Button type="primary" size="large" style={{float: "right"}} onClick={this.logOut}>Log Out</Button>
            </Col>
          </Row><Divider type="horizontal" />
          </div>
        );
      } else {
      return (
        <div style={{paddingTop: "25px"}} className="container" >
          <Row >
            <Col span={12}>
              <h1>Exercises</h1> 
            </Col>
            <Col span={12}>
              <Button type="primary" size="large" style={{float: "right"}} onClick={this.logOut}>Log Out</Button>
            </Col>
          </Row>
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
  }
}

export default Home;
