import React from "react";
import ProgressRatio from "./presenter";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ProgressRatio />
      </div>
    );
  }
}

export default Container;
