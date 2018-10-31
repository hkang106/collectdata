import React, { Component } from "react";
import Select from "react-select";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import { Map, List } from "immutable";

const options = [
  { value: true, label: "True" },
  { value: false, label: "False" }
];

class SurveyItemPresenter extends Component {
  state = {
    answer: List([
      Map({ idx: 0, selectedOption: null }),
      Map({ idx: 1, selectedOption: null }),
      Map({ idx: 2, selectedOption: null }),
      Map({ idx: 3, selectedOption: null }),
      Map({ idx: 4, selectedOption: null }),
      Map({ idx: 5, selectedOption: null }),
      Map({ idx: 6, selectedOption: null }),
      Map({ idx: 7, selectedOption: null }),
      Map({ idx: 8, selectedOption: null }),
      Map({ idx: 9, selectedOption: null }),
      Map({ idx: 10, selectedOption: null }),
      Map({ idx: 11, selectedOption: null }),
      Map({ idx: 12, selectedOption: null }),
      Map({ idx: 13, selectedOption: null }),
      Map({ idx: 14, selectedOption: null })
    ])
  };
  handleChange = selectedOption => {
    console.log("hi");
    //const { action } = this.props;
    const { idx } = this.props;
    //const { answer } = this.state;

    this.state.answer.map(item => {
      if (idx === item.get("idx")) {
        console.log("seletedOption in map: ", selectedOption);
        this.state.answer.updateIn(
          [idx, "selectedOption"],
          val => selectedOption
        );
      }
    });
    console.log("this.state.answer::: ", this.state.answer);
  };

  render() {
    const { idx } = this.props;
    const { answer } = this.state;

    const mapitem = answer.get(idx);
    const selectedOption = mapitem.get("selectedOption");
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
