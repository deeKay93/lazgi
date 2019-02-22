import { AppBar, IconButton, Toolbar, Typography, withStyles, WithStyles, createStyles, Button } from "@material-ui/core";
import React, { Component } from "react";
import SidepanelButton from "../../containers/Sidepanel/SidepanelButton";
import CheckIcon from "@material-ui/icons/PlaylistAddCheck";

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },

  leftIcon: {
    marginRight: 5
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
            LAZ Gold
          </Typography>
          <Button color="inherit">
            <CheckIcon className={classes.leftIcon} />
            Alle Prüfen
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
