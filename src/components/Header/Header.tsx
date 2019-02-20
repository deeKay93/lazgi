import { AppBar, IconButton, Toolbar, Typography, withStyles, WithStyles, createStyles } from "@material-ui/core";
import React, { Component } from "react";
import SidepanelButton from "../../containers/Sidepanel/SidepanelButton";

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
});

export interface Props extends WithStyles<typeof styles> {}

class Header extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar>
          <SidepanelButton />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
