import { createStyles, withStyles, WithStyles, GridList, MobileStepper, Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import AufgabenCard from "../../components/Quiz/Frage";
import { addAnswer, checkAnswer, removeAnswer, AnswerAction } from "../../state/actions/QuizActions";
import { StoreState, FragenListe, Frage } from "../../state/types";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { selectAufgabe, UIAufgabenAction } from "../../state/actions/UiActions";

const styles = createStyles({
  root: {
    flexGrow: 10
  }
});

function mapStateToProps({ quiz: { fragen }, ui: { selectedAufgabe } }: StoreState) {
  const listAufgaben = Object.keys(fragen).map(x => parseInt(x));
  return {
    aufgabe: fragen[selectedAufgabe],
    selectedAufgabe,
    listAufgaben,
    selectedIndex: listAufgaben.indexOf(selectedAufgabe)
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnswerAction | UIAufgabenAction>) {
  return {
    select: (aufgabe: number, antwort: string) => dispatch(addAnswer(aufgabe, antwort)),
    unselect: (aufgabe: number, antwort: string) => dispatch(removeAnswer(aufgabe, antwort)),
    check: (aufgabe: number) => dispatch(checkAnswer(aufgabe)),
    changeAufgabe: (aufgabe: number) => dispatch(selectAufgabe(aufgabe))
  };
}

interface Props extends WithStyles<typeof styles> {
  aufgabe: Frage;
  listAufgaben: number[];
  selectedAufgabe: number;
  selectedIndex: number;
  select: (aufgabe: number, antwort: string) => void;
  unselect: (aufgabe: number, antwort: string) => void;
  check: (aufgabe: number) => void;
  changeAufgabe: (aufgabe: number) => void;
}

class AufgabenListe extends Component<Props> {
  handleNext = () => {
    const { listAufgaben, selectedAufgabe, changeAufgabe } = this.props;
    const currentIndex = listAufgaben.indexOf(selectedAufgabe);
    const nextIndex = listAufgaben[currentIndex + 1];
    changeAufgabe(nextIndex);
  };

  handleBack = () => {
    const { listAufgaben, selectedAufgabe, changeAufgabe } = this.props;
    const currentIndex = listAufgaben.indexOf(selectedAufgabe);
    const nextIndex = listAufgaben[currentIndex - 1];
    changeAufgabe(nextIndex);
  };

  render() {
    const { aufgabe, classes, listAufgaben, selectedIndex } = this.props;
    return (
      <div className={classes.root}>
        <AufgabenCard frage={aufgabe} select={this.props.select} unselect={this.props.unselect} check={this.props.check} />
        <MobileStepper
          steps={listAufgaben.length}
          position="static"
          activeStep={selectedIndex}
          className={""}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={selectedIndex === listAufgaben.length - 1}>
              Next <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={selectedIndex === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AufgabenListe));
