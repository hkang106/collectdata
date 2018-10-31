import React, { Component } from "react";
import { uid } from "react-uid";
import SurveyItem from "components/SurveyItem";

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <ul>
          {console.log(
            "this.props.survey in SurveyForm(presenter.js)::: ",
            this.props.survey
          )}
          {this.props.survey.map((val, i) => {
            return (
              <li key={uid(val)}>
                {console.log(uid(val))}
                <h3>Question {i + 1}</h3>
                <SurveyItem key={uid(val)} idx={i} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SurveyForm;
