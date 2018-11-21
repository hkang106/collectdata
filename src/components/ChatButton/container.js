import ChatButton from "./presenter";
import React from "react";
import history from "redux/configureStore";
import store from "redux/configureStore";

class Container extends React.Component {
  render() {
    const { clickSubmit, routeHistory } = this.props;
    console.log("routeHistory:", routeHistory);
    return (
      <div>
        <ChatButton
          handleSubmit={this._handleSubmit}
          routeHistory={routeHistory}
        />
      </div>
    );
  }

  _handleSubmit = hisPush => {
    console.log("temp");
  };
}

export default Container;
