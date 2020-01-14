import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AdvancedModeSelect from "./AdvancedModeSelect";
import PlayerCountSelect from "./PlayerCountSelect";
import RuleSelect from "./RuleSelect";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  }
});

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdvancedModeChange = this.handleAdvancedModeChange.bind(this);
    this.handlePlayerCountChange = this.handlePlayerCountChange.bind(this);
    this.handleRuleChange = this.handleRuleChange.bind(this);
  }

  handleAdvancedModeChange(mode) {
    this.props.setup.advancedMode = mode;
    this.props.updateSetup(this.props.setup);
  }

  handlePlayerCountChange(playerCount) {
    this.props.setup.playerCount = playerCount;
    this.props.updateSetup(this.props.setup);
  }

  handleRuleChange(rule) {
    this.props.setup.rule = rule;
    this.props.updateSetup(this.props.setup);
  }

  render() {
    const { classes } = this.props;
    const setup = this.props.setup;

    return (
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <AdvancedModeSelect
                advancedMode={setup.advancedMode}
                onAdvancedModeChange={this.handleAdvancedModeChange}
              />

              <PlayerCountSelect
                playerCount={setup.playerCount}
                onPlayerCountChange={this.handlePlayerCountChange}
              />

              <RuleSelect
                rule={setup.rule}
                onRuleChange={this.handleRuleChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Setup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Setup);
