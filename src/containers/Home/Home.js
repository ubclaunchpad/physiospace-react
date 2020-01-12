import React, { Component } from "react";
import Exercise from "../../components/UI/Exercise/Exercise";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Home Page</h1>
        <Exercise title ={"Title"} description ={"desrciption"} source={"https://www.saebo.com/wp-content/uploads/2015/10/elbowstretch-1.png"}/>
      </div>
    );
  }
}

export default Home;
