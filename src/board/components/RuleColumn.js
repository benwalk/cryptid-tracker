import React from "react";
import Grid from "@material-ui/core/Grid";
import RulesMeta from "../../data/rules";

class RuleColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerId: "",
      data: ""
    };
  }

  buildItems() {
    var items = [];

    // one empty one to line up with player header
    items.push(<Grid item xs key="origin" />);

    // one header for each rule
    RulesMeta.forEach(rule => {
      var key = "header-rule-" + rule.id;
      items.push(
        <Grid item key={key}>
          {rule.tag}
        </Grid>
      );
    });

    return items;
  }

  render() {
    return (
      <Grid
        container
        spacing={3}
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {this.buildItems()}
      </Grid>
    );
  }
}

export default RuleColumn;
