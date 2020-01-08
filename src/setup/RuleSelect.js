import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import RulesData from "../data/rules";

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

class RuleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      rules: [],
      rule: {}
    };
  }

  handleChange(event) {
    this.props.onRuleChange(event.target.value);
  }

  componentDidMount() {
    this.setState({
      rules: RulesData
    });
  }

  renderRuleOption(rule) {
    var key = "option-rule-" + rule.id;
    return (
      <option value={rule.id} key={key}>
        {rule.description}
      </option>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="rule-native-simple">Rule</InputLabel>
          <NativeSelect
            value={this.props.rule}
            onChange={this.handleChange}
            inputProps={{
              name: "rule",
              id: "rule-native-simple"
            }}
          >
            <option value="" />
            {this.state.rules.map(this.renderRuleOption)}
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
}

RuleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RuleSelect);
