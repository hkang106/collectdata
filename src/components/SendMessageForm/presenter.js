import React from "react";
import "style.css";

class SendMessageForm extends React.Component {
  render() {
    const { handleSubmit, handleChange, message } = this.props;

    return (
      <form onSubmit={handleSubmit} className="send-message-form">
        <input
          onChange={handleChange}
          value={message}
          placeholder="Type your message."
          type="text"
        />
      </form>
    );
  }
}

export default SendMessageForm;
