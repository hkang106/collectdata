import React, { Component } from "react";
import Test from "./test";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

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
    const { classes } = this.props;

    return (
      <div>
        <input
          name="username"
          type="text"
          onChange={this.handleChange}
          value={this.state.username}
          placeholder={localStorage.getItem("placeholder")}
        />

        <Button
          onClick={() => {
            this.handleClick();
          }}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          CHECK USER
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Validation);
