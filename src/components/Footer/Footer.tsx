import { AppBar, IconButton, Toolbar, Typography, withStyles, WithStyles, createStyles, Card, Grid, Paper } from "@material-ui/core";
import React, { Component } from "react";
import SidepanelButton from "../../containers/Sidepanel/SidepanelButton";
import CompactList from "../../containers/quiz/CompactList";

const styles = createStyles({
  control: {
    margin: 10,
    padding: 10
  }
});

export interface Props extends WithStyles<typeof styles> {}

class Footer extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.control}>
        <CompactList />
      </Paper>
    );
  }
}

export default withStyles(styles)(Footer);
