import React from "react";
import Buttons from "./presenter";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { survey, surveyActions } = this.props;

    return <Buttons clickRandomize={surveyActions.clickRandomize} />;
  }
}

export default Container;
