import React from "react";

import MessageList from "components/MessageList";
import SendMessageForm from "components/SendMessageForm";
//import "style.css";

class LearnersChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1> Learner&#39;s Chat</h1>
        <MessageList />
        <SendMessageForm />
      </div>
    );
  }
}
/**
 *
         
 */
LearnersChat.propTypes = {};

export default LearnersChat;
