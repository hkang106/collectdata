import React from "react";
import "style.css";
import "./chat.css";
function Message(props) {
  return (
    <div>
      {props.is_bot && (
        <div className="message-bot">
          <div className="message-text-bot">{props.text}</div>
        </div>
      )}
      {props.is_user && (
        <div className="message-user">
          <div className="message-text">{props.text}</div>
        </div>
      )}
      <span>is user: {props.is_user}</span>
      <span>is bot: {props.is_bot}</span>
    </div>
  );
}

export default Message;
