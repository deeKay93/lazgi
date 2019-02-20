import { connect } from "react-redux";
import { Dispatch } from "redux";
import MenuIcon from "@material-ui/icons/Menu";
import { SidePanelAction, closeSidePanel, openSidePanel } from "../../state/actions/UiActions";
import React, { Component } from "react";
import { IconButton, createStyles, withStyles, WithStyles } from "@material-ui/core";
import { StoreState } from "../../state/types";

const styles = createStyles({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

function mapStateToProps({ ui: { sidepanelOpen } }: StoreState) {
  return {
    open: sidepanelOpen
  };
}

function mapDispatchToProps(dispatch: Dispatch<SidePanelAction>) {
  return {
    click: () => dispatch(openSidePanel())
  };
}

interface Props extends WithStyles<typeof styles> {
  click: () => void;
}

class SidepanelButton extends Component<Props> {
  render() {
    const { classes, click } = this.props;
    return (
      <IconButton className={classes.menuButton} onClick={click} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SidepanelButton));
