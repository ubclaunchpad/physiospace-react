import React, { Component } from "react";
import { Avatar } from "antd";

class EmotionScale extends Component {
  state = { feedbackGiven: false };

  render() {
    return (
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        {" "}
        <Avatar
          onClick={this.props.function}
          size={80}
          style={{ backgroundColor: "#E4300A" }}
          icon="frown"
        />{" "}
        <Avatar
          onClick={this.props.function}
          size={80}
          style={{ backgroundColor: "#ECE50B" }}
          icon="meh"
        />{" "}
        <Avatar
          onClick={this.props.function}
          size={80}
          style={{ backgroundColor: "#0CB404" }}
          icon="smile"
        />{" "}
      </div>
    );
  }
}
export default EmotionScale;
