import React from "react";

class NextOptions extends React.Component {
  render() {
    const { nextOpt } = this.props;
    return (
      <div>
        {nextOpt && (
          <ul>
            {nextOpt.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default NextOptions;
