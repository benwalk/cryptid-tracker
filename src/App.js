import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import SimpleAppBar from "./AppBar";
import Setup from "./setup/Setup";
import BoardLayout from "./board/BoardLayout";
import Container from "@material-ui/core/Container";

const styles = {
  root: {
    background: "linear-gradient(45deg, #45986E 30%, #10556D 90%)"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      setup: {
        advancedMode: false,
        playerCount: 5,
        rule: "1",
        complete: true
      }
    };

    this.handleSetupChange = this.handleSetupChange.bind(this);
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
      <Container disableGutters className={classes.root}>
        <CssBaseline>
          <SimpleAppBar />
          <Setup
            setup={this.state.setup}
            updateSetup={this.handleSetupChange}
          />
          <BoardLayout setup={this.state.setup} />
        </CssBaseline>
      </Container>
    );
  }
}

export default withStyles(styles)(App);
