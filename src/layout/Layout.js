import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PlayerData from "../data/players";
import RulesData from "../data/rules";
import TrackerBox from "./components/TrackerBox";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      rules: []
    };
  }

  componentDidMount() {
    this.setState({ players: PlayerData, rules: RulesData });
  }

  renderGrid() {
    var rules = this.state.rules;
    var rows = [];

    rows.push(this.renderPlayerHeaderRow());
    for (var rule = 0; rule < rules.length; rule++) {
      rows.push(this.renderRuleRow(rules[rule]));
    }

    return rows;
  }

  renderEmpty() {
    return <Grid item xs={1} key="origin" />;
  }

  renderPlayerHeaderRow() {
    var players = this.state.players;
    var cols = [];

    cols.push(this.renderEmpty());
    players.map(player => {
      cols.push(this.renderPlayerHeader(player));
    });

    return (
      <Grid
        container
        spacing={8}
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
        <Paper className={this.props.classes.paper}>{player.name}</Paper>
      </Grid>
    );
  }

  renderRuleRow(rule) {
    var players = this.state.players;
    var cols = [];

    cols.push(this.renderRuleHeader(rule));
    players.map(player => {
      cols.push(this.renderTracker(player, rule));
    });

    return (
      <Grid
        container
        spacing={8}
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
        <Paper className={this.props.classes.paper}>{rule.tag}</Paper>
      </Grid>
    );
  }

  renderTracker(player, rule, trackState) {
    var name = "tracker-" + player.name + "-" + rule.id;
    return (
      <Grid item xs={1} key={name}>
        <Paper className={this.props.classes.paper}>
          <TrackerBox name={name} tracked={trackState} />
        </Paper>
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.root}> {this.renderGrid()} </div>;
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
