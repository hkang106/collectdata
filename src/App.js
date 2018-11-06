import React, { Component } from "react";
import Validation from "components/Validation";
import SurveyForm from "components/SurveyForm";
import LearnersChat from "components/LearnersChat";
import Buttons from "components/Buttons";
import ChatButton from "components/ChatButton";

export default class App extends Component {
  render() {
    return (
      <div>
        <Validation />
        <SurveyForm />
        <Buttons />
        <LearnersChat />
        <ChatButton />
      </div>
    );
  }
}
