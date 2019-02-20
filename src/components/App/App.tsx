import { AppBar, createStyles, IconButton, Toolbar, Typography, WithStyles, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Component } from "react";
import "./App.css";
import Sidepanel from "../Sidepanel/Sidepanel";

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
export interface State {
  drawerOpen: boolean
}

class App extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      drawerOpen: false
    }
  }

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      drawerOpen: open,
    });
  };

  render(){
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <Sidepanel onClose={this.toggleDrawer(false)} open={this.state.drawerOpen} ></Sidepanel>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton}  onClick={this.toggleDrawer(true)} color="inherit" aria-label="Menu">
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
}

export default withStyles(styles)(App);
