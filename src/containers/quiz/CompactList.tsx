import { Avatar, createStyles, withStyles, WithStyles } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import pink from "@material-ui/core/colors/pink";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SidePanelAction } from "../../state/actions/UiActions";
import { FragenListe, StoreState } from "../../state/types";

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
  },
  wrongAvatar: {
    backgroundColor: pink[500]
  },
  correctAvatar: {
    backgroundColor: green[500]
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
  fragen: FragenListe;
}

class CompactList extends Component<Props> {
  render() {
    const { fragen, classes } = this.props;
    return (
      <div className={classes.list}>
        {Object.values(fragen).map(frage => (
          <Avatar className={`${classes.item} ${!frage.geprueft ? "" : frage.korrekt ? classes.correctAvatar : classes.wrongAvatar}`} key={frage.nr}>
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
