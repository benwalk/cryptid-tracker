import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    padding: 0
  }
});

class TrackerBox extends React.Component {
  state = {
    unknown: true,
    possible: false,
    impossible: false,
    color: "default"
  };

  handleClick = () => {
    if (this.state.unknown) {
      this.setState({
        unknown: false,
        possible: true,
        color: "primary"
      });
    } else if (this.state.possible) {
      this.setState({
        possible: false,
        impossible: true,
        color: "secondary"
      });
    } else {
      this.setState({
        impossible: false,
        unknown: true,
        color: "default"
      });
    }
  };

  colorFor(tracked) {
    if (tracked.unknown) {
      return "primary";
    } else if (tracked.possible) {
      return "secondary";
    } else {
      return "default";
    }
  }

  render() {
    const { classes } = this.props;
    const tracked = this.props.tracked || { unknown: true };
    console.log(
      "rendering trackerbox with track state: " + JSON.stringify(tracked)
    );

    return (
      <Checkbox
        className={classes.root}
        checked={!tracked.unknown}
        onClick={this.handleClick}
        indeterminate={tracked.impossible}
        color={this.colorFor(tracked)}
      />
    );
  }
}

TrackerBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TrackerBox);
