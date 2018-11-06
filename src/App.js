import React, { Component } from "react";
import Validation from "components/Validation";
import SurveyForm from "components/SurveyForm";
import LearnersChat from "components/LC";

export default class App extends Component {
  render() {
    return (
      <div>
        <Validation />
        <SurveyForm />
        <LearnersChat />
      </div>
    );
  }
}
