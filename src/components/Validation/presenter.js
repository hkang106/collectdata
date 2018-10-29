import React, { Component } from "react";

class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    const result = this.props.action.fetchValidUser(this.state.username);
    console.log(result);
  };

  render() {
    return (
      <div>
        <input
          name="username"
          type="text"
          onChange={this.handleChange}
          value={this.state.username}
          placeholder="1@test@test23"
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
