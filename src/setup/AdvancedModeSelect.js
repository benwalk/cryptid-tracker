import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  root: {
    display: "inline-flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class AdvancedModeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      advancedMode: false
    };
  }

  handleChange(event) {
    this.props.onAdvancedModeChange(event.target.checked);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControlLabel
          control={
            <Switch
              checked={this.props.advancedMode}
              onChange={this.handleChange}
              value="advancedMode"
              color="primary"
            />
          }
          label="Advanced Mode"
        />
      </div>
    );
  }
}

AdvancedModeSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvancedModeSelect);
