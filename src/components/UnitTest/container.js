import React from "react";
import UnitTest from "./presenter";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { survey, SurveyActions } = this.props;
    return (
      <UnitTest
        clickRandomize={SurveyActions.clickRandomize}
        survey={survey}
        handleSwitch={SurveyActions.handleSwitch}
      />
    );
  }
}

export default Container;
