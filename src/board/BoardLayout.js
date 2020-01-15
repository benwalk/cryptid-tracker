import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PlayerMeta from "../data/players";
import RuleColumn from "./components/RuleColumn";
import PlayerColumn from "./components/PlayerColumn";

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

    this.handleTrackerUpdate = this.handleTrackerUpdate.bind(this);
  }

  componentDidMount() {
    console.log(this.props.setup);
    this.setState({ setup: this.props.setup });
  }

  handleTrackerUpdate(trackerState) {
    console.log("tracker state updated: " + trackerState);
    this.setState({ data: {} });
  }

  renderGrid() {
    const { classes } = this.props;
    const gameData = this.state.data;
    var cols = [];

    cols.push(this.renderRuleColumn());
    PlayerMeta.forEach(player => {
      cols.push(this.renderPlayerColumn(player, gameData[player.id]));
    });

    return (
      <Paper className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
        >
          {cols}
        </Grid>
      </Paper>
    );
  }

  renderRuleColumn() {
    return (
      <Grid item>
        <RuleColumn />
      </Grid>
    );
  }

  renderPlayerColumn(player, data) {
    return (
      <Grid item>
        <PlayerColumn player={player} data={data} setup={this.state.setup} />
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
