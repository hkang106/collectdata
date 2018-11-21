import App from "./presenter";
import React, { Component } from "react";

class Container extends Component {
  render() {
    const { pathname } = this.props;
    return <App pathname={pathname} />;
  }
}

export default Container;
