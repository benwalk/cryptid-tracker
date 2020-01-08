import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const styles = theme => ({
  root: {
    display: "inline-flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class PlayerCountSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onPlayerCountChange(event.target.value);
  }

  render() {
    const { classes } = this.props;
    const players = this.props.playerCount;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="player-count-native-simple">Players</InputLabel>
          <NativeSelect
            value={players}
            onChange={this.handleChange}
            inputProps={{
              name: "player-count",
              id: "player-count-native-simple"
            }}
          >
            <option value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
}

PlayerCountSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayerCountSelect);
