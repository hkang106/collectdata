import React, { Component } from "react";
import SurveyForm from "./presenter";

class Container extends Component {
  render() {
    //const { SurveyActions } = this.props;
    return (
      <div>
        <h1>Survey Question</h1>
        <SurveyForm survey={this.props.survey} />
      </div>
    );
  }
}

export default Container;
