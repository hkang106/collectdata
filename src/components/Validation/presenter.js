import React, { Component } from "react";
//import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import "semantic-ui-css/semantic.min.css";
import { Button, Container, Checkbox, Form } from "semantic-ui-react";

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
    const {
      usernameValue,
      emailValue,
      passwordValue,
      signupSubmit,
      inputChange
    } = this.props;
    return (
      <div>
        <Container text>
          <Form onSubmit={signupSubmit}>
            <Form.Field>
              <label>Username</label>
              <input
                name="username"
                onChange={inputChange}
                value={usernameValue}
                placeholder="Username"
              />
            </Form.Field>
            <Form.Field>
              <label>email</label>
              <input
                name="email"
                onChange={inputChange}
                value={emailValue}
                placeholder="Email"
              />
            </Form.Field>
            <Form.Field>
              <label>password</label>
              <input
                name="password"
                onChange={inputChange}
                value={passwordValue}
                placeholder="Password"
              />
            </Form.Field>
            <Button color="orange" type="submit">
              SIGN UP
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Validation);

/*
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
            color="red"
          >
            CHECK USER
          </Button>
*/
