import React, { Component } from "react";
import Validation from "components/Validation";
import SurveyForm from "components/SurveyForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <Validation />
        <SurveyForm />
      </div>
    );
  }
}
