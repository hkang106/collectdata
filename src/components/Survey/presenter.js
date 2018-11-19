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
//import BluetoothIcon from "@material-ui/icons/Bluetooth";
//import ListItemIcon from "@material-ui/core/ListItemIcon";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class Survey extends React.Component {
  render() {
    const { classes } = this.props;
    const { clickRandomize, survey, handleSwitch } = this.props;

    return (
      <div className={classes.root}>
        <List subheader={<ListSubheader>진단고사</ListSubheader>}>
          <ListItem>
            <ListItemText primary="Question 1" />
            <ListItemSecondaryAction>
              <span>False</span>
              <Switch
                onChange={event =>
                  handleSwitch({ event: event, question: "dq1" })
                }
                checked={survey.dq1}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq2" })
                }
                checked={survey.dq2}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq3" })
                }
                checked={survey.dq3}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq4" })
                }
                checked={survey.dq4}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq5" })
                }
                checked={survey.dq5}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq6" })
                }
                checked={survey.dq6}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq7" })
                }
                checked={survey.dq7}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq8" })
                }
                checked={survey.dq8}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq9" })
                }
                checked={survey.dq9}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq10" })
                }
                checked={survey.dq10}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq11" })
                }
                checked={survey.dq11}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq12" })
                }
                checked={survey.dq12}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq13" })
                }
                checked={survey.dq13}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq14" })
                }
                checked={survey.dq14}
                color="primary"
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
                  handleSwitch({ event: event, question: "dq15" })
                }
                checked={survey.dq15}
                color="primary"
              />
              <span>True</span>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}

Survey.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Survey);
