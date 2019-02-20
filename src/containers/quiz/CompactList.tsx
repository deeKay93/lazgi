import { connect } from "react-redux";
import { Dispatch } from "redux";
import MenuIcon from "@material-ui/icons/Menu";
import { SidePanelAction, closeSidePanel, openSidePanel } from "../../state/actions/UiActions";
import React, { Component } from "react";
import { IconButton, createStyles, withStyles, WithStyles, Avatar } from "@material-ui/core";
import { StoreState, Frage as iFrage } from "../../state/types";
import Frage from "../../components/Quiz/Frage";
import classes from "*.module.css";

const styles = createStyles({
  list: {
    display: "flex",
    overflowY: "auto"
  },
  item: {
    width: "2rem",
    height: "2rem",
    fontSize: "1rem",
    marginRight: 1,
    marginLeft: 1
  }
});

function mapStateToProps({ quiz: { fragen } }: StoreState) {
  return {
    fragen
  };
}

function mapDispatchToProps(dispatch: Dispatch<SidePanelAction>) {
  return {};
}

interface Props extends WithStyles<typeof styles> {
  fragen: iFrage[];
}

class CompactList extends Component<Props> {
  render() {
    const { fragen, classes } = this.props;
    return (
      <div className={classes.list}>
        {fragen.map(frage => (
          <Avatar className={classes.item} key={frage.nr}>
            {frage.nr}
          </Avatar>
        ))}
      </div>
    );
  }
}
export default connect(
  mapStateToProps
  //   ,
  //   mapDispatchToProps
)(withStyles(styles)(CompactList));
