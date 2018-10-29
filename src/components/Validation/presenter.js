import React, { Component } from "react";

class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    localStorage.setItem("placeholder", "1@test@test23");

    if (this.state.username === "") {
      this.setState({ username: localStorage.getItem("placeholder") });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    this.props.action.fetchValidUser(this.state.username);
    console.log("this.state.username: ", this.state.username);
  };

  render() {
    return (
      <div>
        <input
          name="username"
          type="text"
          onChange={this.handleChange}
          value={this.state.username}
          placeholder={localStorage.getItem("placeholder")}
        />
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Validate User
        </button>
      </div>
    );
  }
}

export default Validation;
