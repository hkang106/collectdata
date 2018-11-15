import React from "react";
import UnitTest from "./presenter";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { survey, clickRandomize } = this.props;
    return <UnitTest clickRandomize={clickRandomize} survey={survey} />;
  }
}

export default Container;
