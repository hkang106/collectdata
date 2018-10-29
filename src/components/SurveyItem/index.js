import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: true, label: "True" },
  { value: false, label: "False" }
];

class SurveyDropDownItem extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
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

export default SurveyDropDownItem;
