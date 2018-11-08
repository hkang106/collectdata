import React from "react";
import SendMessageForm from "./presenter";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    const { chat, chatActions } = this.props;
    return (
      <div>
        <SendMessageForm
          sendMessage={chatActions.sendMessage}
          handleChange={this._handleChange}
          handleSubmit={this._handleSubmit}
          message={this.state.message}
        />
        ;
      </div>
    );
  }
  _handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.chatActions.sendMessage(this.state.message);
    this.setState({
      message: ""
    });
  }
}

export default Container;
