import React from "react";
import PropTypes from "prop-types";
import CenteredGrid from "./presenter";
class LC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CenteredGrid />;
  }
}

LC.propTypes = {};

export default LC;
