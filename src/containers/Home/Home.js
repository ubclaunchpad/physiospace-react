import React, { Component } from "react";

import { Row, Col, Divider, Button } from 'antd';

import Exercise from "../../components/UI/Exercise/Exercise";

import icon from "../../assets/images/icon.png";

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
          <img className="icon" src={icon}></img>
          <h1 style={{color: "white", fontSize: "40px"}}>Physio-Space</h1>
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
          <Row className="containerr" gutter={20}>
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
        </div>
      );
    }
  }
  }
}

export default Home;
