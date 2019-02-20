import { AppBar, createStyles, IconButton, Toolbar, Typography, WithStyles, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Component } from "react";
import Sidepanel from "../../containers/Sidepanel/Sidepanel";
import store from "../../state/store";
import { openSidePanel, closeSidePanel } from "../../state/actions/UiActions";
import Header from "./Header/Header";

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

export interface Props extends WithStyles<typeof styles> {}
class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <Sidepanel />
          <Header />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
