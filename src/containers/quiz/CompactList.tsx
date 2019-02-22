import { Avatar, createStyles, withStyles, WithStyles, Grid, Button, IconButton } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import pink from "@material-ui/core/colors/pink";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { UIAction, selectAufgabe } from "../../state/actions/UiActions";
import { FragenListe, StoreState } from "../../state/types";

const styles = createStyles({
  list: {},
  item: {
    width: "2rem",
    height: "2rem",
    fontSize: "1rem"
  },
  wrongAvatar: {
    backgroundColor: pink[500]
  },
  correctAvatar: {
    backgroundColor: green[500]
  },
  button: {
    padding: 4
  }
});

function mapStateToProps({ quiz: { fragen } }: StoreState) {
  return {
    fragen
  };
}

function mapDispatchToProps(dispatch: Dispatch<UIAction>) {
  return {
    onClick: (nr: number) => dispatch(selectAufgabe(nr))
  };
}

interface Props extends WithStyles<typeof styles> {
  fragen: FragenListe;
  onClick: (nr: number) => void;
}

class CompactList extends Component<Props> {
  render() {
    const { fragen, classes, onClick } = this.props;
    return (
      <Grid container>
        {Object.values(fragen).map(frage => (
          <Grid item key={frage.nr}>
            <IconButton onClick={() => onClick(frage.nr)} className={classes.button}>
              <Avatar className={`${classes.item} ${!frage.geprueft ? "" : frage.korrekt ? classes.correctAvatar : classes.wrongAvatar}`}>{frage.nr}</Avatar>
            </IconButton>
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CompactList));
