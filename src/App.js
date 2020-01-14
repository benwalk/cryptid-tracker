import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SimpleAppBar from "./AppBar";
import Setup from "./setup/Setup";
import BoardLayout from "./board/BoardLayout";

const styles = {
  root: {
    background: "linear-gradient(45deg, #45986E 30%, #10556D 90%)"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetupChange = this.handleSetupChange.bind(this);
    this.state = {
      setup: {
        advancedMode: false,
        playerCount: 0,
        rule: "",
        complete: false
      }
    };
  }

  handleSetupChange(setup) {
    if (setup.playerCount > 0 && setup.rule !== "") {
      setup.complete = true;
    } else {
      setup.complete = false;
    }
    this.setState({ setup: setup });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <SimpleAppBar />
        <Setup setup={this.state.setup} updateSetup={this.handleSetupChange} />
        <BoardLayout setup={this.state.setup} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
