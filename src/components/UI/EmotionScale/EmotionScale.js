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
          style={{ backgroundColor: "#E4300A" }}
          icon="user"
        />{" "}
        <Avatar
          onClick={this.props.function}
          style={{ backgroundColor: "#f56a00" }}
          icon="user"
        />{" "}
        <Avatar
          onClick={this.props.function}
          style={{ backgroundColor: "#ECE50B" }}
          icon="user"
        />{" "}
        <Avatar
          onClick={this.props.function}
          style={{ backgroundColor: "#0CB404" }}
          icon="user"
        />
      </div>
    );
  }
}
export default EmotionScale;
