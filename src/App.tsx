import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { AppBar, Toolbar, IconButton, Typography, createStyles, WithStyles, withStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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

function App(props: Props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Button variant="contained" color="primary">
          Hello There
        </Button>
      </div>
    </React.Fragment>
  );
}
export default withStyles(styles)(App);
