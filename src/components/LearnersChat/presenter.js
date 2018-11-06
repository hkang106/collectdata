import React from "react";
import PropTypes from "prop-types";
import CenteredGrid from "./grid";
class LearnersChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1> Learner&#39;s Chat</h1>
        <CenteredGrid />
      </div>
    );
  }
}

LearnersChat.propTypes = {};

export default LearnersChat;
