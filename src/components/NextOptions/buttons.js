import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./options.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function OutlinedButtons(props) {
  const { classes } = props;
  const { nextOpt, getFetBotProps, fetchBotMessage, clickOption } = props;
  const opt_cids = getFetBotProps[0];
  const message = getFetBotProps[1];

  return (
    <div className="options">
      <ul className="nobull">
        {nextOpt.map((item, index) => {
          return (
            <li>
              <Button
                variant="outlined"
                className={classes.button}
                onClick={() => {
                  fetchBotMessage(opt_cids[index], message);
                  clickOption(nextOpt[index]);
                }}
              >
                {item}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedButtons);
