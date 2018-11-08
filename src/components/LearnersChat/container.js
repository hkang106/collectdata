import React, { Component } from "react";
import LearnersChat from "./presenter";
class container extends Component {
  render() {
    const { chatActions } = this.props;

    return <LearnersChat sendMessage={chatActions.sendMessage} />;
  }
}

export default container;
