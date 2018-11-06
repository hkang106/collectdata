import React, { Component } from "react";
import { uid } from "react-uid";
import SurveyItem from "components/SurveyItem";
//import Test from "./test.js";
//import Test2 from "./test2.js";
import CenteredGrid from "./grid";
class SurveyForm extends Component {
  render() {
    return (
      <div>
        <h1>치매 진단 데이터셋 제작중</h1>
        <CenteredGrid />
      </div>
    );
  }
}

export default SurveyForm;

/*

        /*
        <form onSubmit={console.log("submit is done!")}>
          <ul>
            {this.props.survey.map((val, i) => {
              return (
                <li key={uid(val)}>
                  <h3>Question {i + 1}</h3>
                  <SurveyItem key={uid(val)} idx={i} />
                </li>
              );
            })}
          </ul>
          <input type="submit" />
        </form>
        */
