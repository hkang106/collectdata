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
  render() {
    const { classes, clickRandomize, survey, handleSwitch } = this.props;

    return (
      <div className={classes.root}>
        <List subheader={<ListSubheader>예방고사</ListSubheader>}>
          <ListItem>
            <ListItemText primary="Question 1" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq1" })
                }
                checked={survey.uq1}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemText primary="Question 2" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq2" })
                }
                checked={survey.uq2}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemText primary="Question 3" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq3" })
                }
                checked={survey.uq3}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 4" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq4" })
                }
                checked={survey.uq4}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 5" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq5" })
                }
                checked={survey.uq5}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 6" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq6" })
                }
                checked={survey.uq6}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 7" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq7" })
                }
                checked={survey.uq7}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 8" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq8" })
                }
                checked={survey.uq8}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 9" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq9" })
                }
                checked={survey.uq9}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 10" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq10" })
                }
                checked={survey.uq10}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 11" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq11" })
                }
                checked={survey.uq11}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 12" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq12" })
                }
                checked={survey.uq12}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 13" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq13" })
                }
                checked={survey.uq13}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 14" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq14" })
                }
                checked={survey.uq14}
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Question 15" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "uq15" })
                }
                checked={survey.uq15}
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
