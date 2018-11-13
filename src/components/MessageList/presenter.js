import React from "react";
import Message from "components/Message";
import ReactDOM from "react-dom";
import "./chatbubble.css";
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
    const {
      data: { messages, bot_responses, is_bot_message }
    } = this.props;

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
          return (
            <div className="msg-container">
              {console.log(is_bot_message)}
              {
                <Message
                  className="message-user"
                  text={message}
                  is_bot={!is_bot_message}
                />
              }

              {
                <Message
                  className="message-bot"
                  text={bot_responses[index]}
                  is_bot={is_bot_message}
                />
              }
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
