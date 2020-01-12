import React, { Component } from "react";
import { Modal, Button } from "antd";
import EmotionScale from "../EmotionScale/EmotionScale";

class FeedbackModal extends Component {
  state = { visible: false, showThanks: false };

  showModal = () => {
    this.setState({
      visible: true,
      showThanks: false
    });
  };

  showThanks = () => {
    console.log(this.state);
    this.setState({
      showThanks: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      showThanks: false
    });
  };

  render() {
    if (this.state.showThanks === true) {
      return (
        <div>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal
            title="How do you feel now?"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <h1> Feedback recorded </h1>
          </Modal>
        </div>
      );
    } else {
      return (
        <div>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal
            title="How do you feel now?"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <EmotionScale function={this.showThanks} />
          </Modal>
        </div>
      );
    }
  }
}
export default FeedbackModal;
