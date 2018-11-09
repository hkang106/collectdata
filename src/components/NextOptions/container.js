import React from "react";
import NextOptions from "./presenter";

class Container extends React.Component {
  render() {
    const {
      chat: { options }
    } = this.props;

    return (
      <div>
        <h3>What you can say</h3>
        <NextOptions nextOpt={this._getNextOpt(options)} />
      </div>
    );
  }

  _getNextOpt = options => {
    if (options.length > 0) {
      const nextOpt = options[options.length - 1];
      return nextOpt;
    }
    return null;
  };
}

export default Container;
