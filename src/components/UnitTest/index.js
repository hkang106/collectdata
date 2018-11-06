import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
//import WifiIcon from "@material-ui/icons/Wifi";
//import ListItemIcon from "@material-ui/core/ListItemIcon";
//import BluetoothIcon from "@material-ui/icons/Bluetooth";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class UnitTest extends React.Component {
  state = {
    checked1: true,
    checked2: true,
    checked3: true,
    checked4: true,
    checked5: true,
    checked6: true,
    checked7: true,
    checked8: true,
    checked9: true,
    checked10: true,
    checked11: true,
    checked12: true,
    checked13: true,
    checked14: true,
    checked15: true
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    console.log("event.target.checked: ", event.target.checked);
  };

  render() {
    const { classes } = this.props;
    console.log("this.state:", this.state);

    return (
      <div className={classes.root}>
        <List subheader={<ListSubheader>예방고사</ListSubheader>}>
          <ListItem>
            <ListItemText primary="Question 1" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked1")}
                checked={this.state.checked1}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemText primary="Question 2" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked2")}
                checked={this.state.checked2}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemText primary="Question 3" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked3")}
                checked={this.state.checked3}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 4" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked4")}
                checked={this.state.checked4}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 5" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked5")}
                checked={this.state.checked5}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 6" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked6")}
                checked={this.state.checked6}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 7" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked7")}
                checked={this.state.checked7}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 8" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked8")}
                checked={this.state.checked8}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 9" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked9")}
                checked={this.state.checked9}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 10" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked10")}
                checked={this.state.checked10}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 11" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked11")}
                checked={this.state.checked11}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 12" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked12")}
                checked={this.state.checked12}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 13" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked13")}
                checked={this.state.checked13}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 14" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked14")}
                checked={this.state.checked14}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 15" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={this.handleChange("checked15")}
                checked={this.state.checked15}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}

UnitTest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UnitTest);
