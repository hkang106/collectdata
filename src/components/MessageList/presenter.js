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
    //console.log("this.props:", this.props);
    const {
      data: {
        messages,
        bot_responses,
        is_user_message,
        is_bot_message,
        is_option_selected
      }
    } = this.props;

    //console.log("messages:", messages);
    //console.log("messages.length: ", messages.length);

    console.log("is_user_message: ", is_user_message);
    console.log("is_bot_message: ", is_bot_message);
    console.log("is_option_selected: ", is_option_selected);
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
              {is_bot_message && (
                <Message
                  className="message-user"
                  text={message}
                  is_user={is_user_message}
                />
              )}

              {is_bot_message && (
                <Message
                  className="message-bot"
                  text={bot_responses[index]}
                  is_bot={is_bot_message}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
