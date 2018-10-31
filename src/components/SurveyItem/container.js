import React, { Component } from "react";
import SurveyItemPresenter from "./presenter";

class Container extends Component {
  render() {
    const { SurveyActions, idx, survey } = this.props;
    return (
      <div>
        <SurveyItemPresenter idx={idx} survey={survey} action={SurveyActions} />
      </div>
    );
  }
}

export default Container;
