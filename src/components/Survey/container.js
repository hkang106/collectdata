import React from "react";
import Survey from "./presenter";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { survey, SurveyActions } = this.props;
    return (
      <Survey
        clickRandomize={SurveyActions.clickRandomize}
        survey={survey}
        handleSwitch={SurveyActions.handleSwitch}
      />
    );
  }
}

export default Container;
