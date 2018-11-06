import React, { Component } from "react";
import Select from "react-select";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import { Map, List, fromJS } from "immutable";

const options = [
  { value: true, label: "True" },
  { value: false, label: "False" }
];

class SurveyItemPresenter extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    const { idx } = this.props;

    this.setState({
      selectedOption: selectedOption
    });
  };

  render() {
    const { action, survey, idx } = this.props;
    const { selectedOption } = this.state;
    console.log("selectedOption: ", selectedOption);
    console.log("survey.get(idx): ", survey.get(idx));

    console.log("idx: ", idx);

    return (
      <div>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

export default SurveyItemPresenter;
