import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PlayerData from "../data/players";
import RulesData from "../data/rules";
import Instructions from "../setup/Instructions";
import TrackerBox from "./components/TrackerBox";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class BoardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setup: {},
      data: {}
    };
  }

  componentDidMount() {
    console.log(this.props.setup);
    this.setState({ setup: this.props.setup });
  }

  renderGrid() {
    const { classes } = this.props;
    const rulesData = RulesData;
    var rows = [];

    for (var rule = 0; rule < rulesData.length; rule++) {
      if (rule === 0) {
        rows.push(this.renderPlayerHeaderRow());
      } else {
        rows.push(this.renderRuleRow(rulesData[rule]));
      }
    }

    return (
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>{rows}</Paper>
        </Grid>
      </Grid>
    );
  }

  renderEmpty() {
    return <Grid item xs={1} key="origin" />;
  }

  renderPlayerHeaderRow() {
    const playerCount = this.state.setup.playerCount;
    var cols = [];

    cols.push(this.renderEmpty());
    PlayerData.forEach(player => {
      if (player.id <= playerCount) {
        cols.push(this.renderPlayerHeader(player));
      }
    });

    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        key="player-header-row"
      >
        {cols}
      </Grid>
    );
  }

  renderPlayerHeader(player) {
    var key = "header-player-" + player.id;
    return (
      <Grid item xs={1} key={key}>
        {player.name}
      </Grid>
    );
  }

  renderRuleRow(rule) {
    var playerCount = this.state.setup.playerCount;
    var cols = [];

    cols.push(this.renderRuleHeader(rule));
    PlayerData.forEach(player => {
      if (player.id <= playerCount) {
        cols.push(this.renderTracker(player, rule));
      }
    });

    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        key={"rule-row-" + rule.id}
      >
        {cols}
      </Grid>
    );
  }

  renderRuleHeader(rule) {
    var key = "header-rule-" + rule.id;
    return (
      <Grid item xs={1} key={key}>
        {rule.tag}
      </Grid>
    );
  }

  renderTracker(player, rule, trackState) {
    var name = "tracker-" + player.name + "-" + rule.id;
    return (
      <Grid item xs={1} key={name}>
        <TrackerBox name={name} tracked={trackState} />
      </Grid>
    );
  }

  renderInstructions() {
    const { classes } = this.props;

    return (
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Instructions />
          </Paper>
        </Grid>
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;

    if (this.state.setup.complete) {
      return <div className={classes.root}> {this.renderGrid()} </div>;
    } else {
      return <div className={classes.root} />;
    }
  }
}

BoardLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BoardLayout);
