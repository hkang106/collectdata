import React from "react";
import OutlinedButtons from "./buttons";

class NextOptions extends React.Component {
  render() {
    const {
      nextOpt,
      getFetBotProps,
      fetchBotMessage,
      clickOption
    } = this.props;
    return (
      <div>
        {nextOpt && (
          <OutlinedButtons
            nextOpt={nextOpt}
            getFetBotProps={getFetBotProps}
            fetchBotMessage={fetchBotMessage}
            clickOption={clickOption}
          />
        )}
      </div>
    );
  }
}
export default NextOptions;
