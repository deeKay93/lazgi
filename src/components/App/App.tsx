import { AppBar, createStyles, IconButton, Toolbar, Typography, WithStyles, withStyles, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Component } from "react";
import Sidepanel from "../../containers/Sidepanel/Sidepanel";
import store from "../../state/store";
import { openSidePanel, closeSidePanel } from "../../state/actions/UiActions";
import Header from "../Header/Header";
import List from "../../containers/quiz/List";
import Footer from "../Footer/Footer";

const styles = createStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  main: {
    flex: 1
  },
  foot: {
    flex: 0
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
        <Sidepanel />
        <Header />
        <div className={classes.root}>
          <div className={classes.main}>
            <List />
          </div>
          <div className={classes.foot}>
            <Footer />
          </div>
          {/* <Grid container spacing={16}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid> */}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
