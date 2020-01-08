import React from "react";
import SimpleAppBar from "./AppBar";
import Setup from "./setup/Setup";
import Layout from "./layout/Layout";
import PlayerData from "./data/players";
import RulesData from "./data/rules";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetupChange = this.handleSetupChange.bind(this);
    this.state = {
      setup: {
        advancedMode: false,
        playerCount: 0,
        rule: ""
      }
    };
  }

  handleSetupChange(setup) {
    console.log(setup);
    this.setState({ setup: setup });
  }

  render() {
    return (
      <div className="App">
        <SimpleAppBar />
        <Setup setup={this.state.setup} updateSetup={this.handleSetupChange} />
        <Layout />
      </div>
    );
  }
}

export default App;
