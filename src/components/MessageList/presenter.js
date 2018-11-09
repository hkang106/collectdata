import React from "react";
import Message from "components/Message";
import ReactDOM from "react-dom";

class MessageList extends React.Component {
  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom =
      node.scrollTop + node.clientHeight + 300 >= node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }
  render() {
    console.log("this.props:", this.props);
    const {
      data: { messages }
    } = this.props;

    console.log("messages:", messages);
    console.log("messages.length: ", messages.length);
    if (messages.length === 0) {
      return (
        <div className="message-list">
          <span>no messages</span>
        </div>
      );
    }
    return (
      <div className="message-list">
        {messages.map((message, index) => {
          return <Message text={message} />;
        })}
      </div>
    );
  }
}

export default MessageList;
