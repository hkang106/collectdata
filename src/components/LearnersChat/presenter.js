import React from "react";

import MessageList from "components/MessageList";
import SendMessageForm from "components/SendMessageForm";
import NextOptions from "components/NextOptions";
//import "style.css";
import "./lcstyle.css";

class LearnersChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1> Learner&#39;s Chat</h1>
        <div className="lc-container">
          <div className="lc-first-col">
            <MessageList />
            <SendMessageForm />
          </div>
          <div className="lc-second-col">
            <NextOptions />
          </div>
        </div>
      </div>
    );
  }
}
/**
 *
         
 */
LearnersChat.propTypes = {};

export default LearnersChat;
