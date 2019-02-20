import { AppBar, IconButton, Toolbar, Typography, withStyles, WithStyles, createStyles } from "@material-ui/core";
import React, { Component } from "react";
import SidepanelButton from "../../containers/Sidepanel/SidepanelButton";
import CompactList from "../../containers/quiz/CompactList";

const styles = createStyles({
  appBar: {
    top: "auto",
    bottom: 0
  }
});

export interface Props extends WithStyles<typeof styles> {}

class Footer extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <CompactList />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Footer);
