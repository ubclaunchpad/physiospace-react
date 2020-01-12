import React, { Component } from "react";
import { Modal, Button } from "antd";
import EmotionScale from "../EmotionScale/EmotionScale";

class FeedbackModal extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
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
      visible: false
    });
  };

  render() {
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
          <EmotionScale />
        </Modal>
      </div>
    );
  }
}
export default FeedbackModal;
