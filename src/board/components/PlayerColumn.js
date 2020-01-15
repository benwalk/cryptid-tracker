import React from "react";
import Grid from "@material-ui/core/Grid";
import PlayerMeta from "../../data/players";
import RulesMeta from "../../data/rules";
import TrackerBox from "./TrackerBox";

class PlayerColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "",
      data: "",
      setup: ""
    };
  }

  buildItems() {
    const player = this.props.player;
    const data = this.props.playerData;
    var items = [];

    // one player header
    items.push(this.playerHeader(player));

    // one tracker for each rule
    RulesMeta.forEach(rule => {
      var key = "player-" + player.id + "-rule-" + rule.id;
      items.push(
        <Grid item key={key}>
          {this.tracker(player, rule, data)}
        </Grid>
      );
    });

    return items;
  }

  playerHeader(player) {
    var key = "header-player-" + player.id;
    return (
      <Grid item key={key}>
        {player.name}
      </Grid>
    );
  }

  tracker(player, rule, trackerState) {
    var name = "tracker-" + player.id + "-" + rule.id;
    return <TrackerBox name={name} tracked={trackerState} />;
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {this.buildItems()}
      </Grid>
    );
  }
}

export default PlayerColumn;
