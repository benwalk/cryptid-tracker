import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { version } from ".././package.json";

const styles = theme => ({
  root: {
    background: theme.palette.background.default
  },
  toolbar: {
    background: "#45986E",
    color: theme.palette.background.default,
    fontWeight: theme.typography.fontWeightBold
  }
});

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">{"Cryptid Tracker v" + version}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(SimpleAppBar);
