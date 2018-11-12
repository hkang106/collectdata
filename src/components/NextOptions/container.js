import React from "react";
import NextOptions from "./presenter";

class Container extends React.Component {
  render() {
    const {
      chat: { options, opt_cids, messages }
    } = this.props;
    const { chatActions } = this.props;
    return (
      <div>
        <h3>What you can say</h3>
        <NextOptions
          nextOpt={this._getNextOpt(options)}
          fetchBotMessage={chatActions.fetchBotMessage}
          clickOption={chatActions.clickOption}
          getFetBotProps={this._getFetBotProps(opt_cids, messages)}
        />
      </div>
    );
  }

  _getFetBotProps = (opt_cids, messages) => {
    let last_opt_cid = null;
    let last_message = null;

    if (opt_cids.length > 0) {
      last_opt_cid = opt_cids[opt_cids.length - 1];
    }
    if (messages.length > 0) {
      last_message = messages[messages.length - 1];
    }
    return [last_opt_cid, last_message];
  };

  _getNextOpt = options => {
    if (options.length > 0) {
      const nextOpt = options[options.length - 1];
      return nextOpt;
    }
    return null;
  };
}

export default Container;
