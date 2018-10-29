import React, { Component } from "react";
import SurveyItem from "components/SurveyItem";

class SurveyForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SurveyItem />
      </div>
    );
  }
}

export default SurveyForm;
