import { connect } from "react-redux";
import { Dispatch } from "redux";
import MenuIcon from "@material-ui/icons/Menu";
import { SidePanelAction, closeSidePanel, openSidePanel } from "../../state/actions/UiActions";
import React, { Component } from "react";
import { IconButton, createStyles, withStyles, WithStyles } from "@material-ui/core";
import { StoreState, Frage as iFrage, FragenListe } from "../../state/types";
import Frage from "../../components/Quiz/Frage";
import { addAnswer, QuizAction, removeAnswer, checkAnswer } from "../../state/actions/QuizActions";

const styles = createStyles({});

function mapStateToProps({ quiz }: StoreState) {
  return {
    fragen: quiz.fragen
  };
}

function mapDispatchToProps(dispatch: Dispatch<QuizAction>) {
  return {
    select: (frage: number, antwort: string) => dispatch(addAnswer(frage, antwort)),
    unselect: (frage: number, antwort: string) => dispatch(removeAnswer(frage, antwort)),
    check: (frage: number) => dispatch(checkAnswer(frage))
  };
}

interface Props extends WithStyles<typeof styles> {
  fragen: FragenListe;
  select: (frage: number, antwort: string) => void;
  unselect: (frage: number, antwort: string) => void;
  check: (frage: number) => void;
}

class List extends Component<Props> {
  render() {
    const { fragen } = this.props;
    return (
      <div>
        {Object.values(fragen).map(frage => (
          <Frage key={frage.nr} frage={frage} select={this.props.select} unselect={this.props.unselect} check={this.props.check} />
        ))}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(List));
