import React, { Component } from "react";
import Validation from "./presenter";

class Container extends Component {
  render() {
    const { UserActions } = this.props;
    return (
      <div>
        {console.log(UserActions)}
        <h1>User Validation</h1>
        <Validation action={UserActions} />
      </div>
    );
  }
}

export default Container;
