import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceICon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import { Link, withRouter } from "react-router-dom";

import history from "redux/configureStore";

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

function ChatButton(props) {
  const { classes, handleSubmit } = props;
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleSubmit();
        }}
        className={classes.button}
      >
        Submit
      </Button>
    </div>
  );
}

ChatButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(ChatButton));
