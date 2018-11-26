import React, { Component } from "react";
import Validation from "./presenter";

class Container extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  render() {
    const { UserActions } = this.props;
    const { password, username, email } = this.state;
    console.log("this.state::::: ", this.state);
    return (
      <div>
        <h1>User Validation</h1>
        <Validation
          action={UserActions}
          signupSubmit={this._signupSubmit}
          inputChange={this._inputChange}
          usernameValue={username}
          emailValue={email}
          passwordValue={password}
        />
      </div>
    );
  }
  _inputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  _signupSubmit = event => {
    event.preventDefault();
    const { username, password, email } = this.state;
    //  action to fetch
    const { UserActions } = this.props;
    UserActions.signupUser(username, email, password);
  };
}

export default Container;
