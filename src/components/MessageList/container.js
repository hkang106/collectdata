import React from "react";
import MessageList from "./presenter";
import ReactDOM from "react-dom";

class Container extends React.Component {
  render() {
    const { chat, chatActions } = this.props;
    return (
      <div>
        <MessageList messages={chat} />
      </div>
    );
  }
}

export default Container;
