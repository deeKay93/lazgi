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
import Mousetrap from "mousetrap";
import ReactSwipe from "react-swipe";

const styles = createStyles({
  root: {
    flexGrow: 10
  }
});

function mapStateToProps({ quiz: { fragen }, ui: { selectedAufgabe } }: StoreState) {
  const listAufgaben = Object.keys(fragen).map(x => parseInt(x));
  return {
    aufgaben: fragen,
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
  aufgaben: FragenListe;
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
    if (this.reactSwipeRef) {
      this.reactSwipeRef.next();
    }
  };

  handleBack = () => {
    if (this.reactSwipeRef) {
      this.reactSwipeRef.prev();
    }
  };

  componentDidMount() {
    Mousetrap.bind("left", this.handleBack);
    Mousetrap.bind("right", this.handleNext);
  }
  componentWillUnmount() {
    Mousetrap.unbind("left");
    Mousetrap.unbind("right");
  }

  getIndex(index: number) {
    const { listAufgaben } = this.props;
    return (index + listAufgaben.length) % listAufgaben.length;
  }

  reactSwipeRef: ReactSwipe | null = null;

  render() {
    const { aufgaben, classes, listAufgaben, selectedIndex, changeAufgabe } = this.props;

    return (
      <div className={classes.root}>
        <ReactSwipe
          ref={el => (this.reactSwipeRef = el)}
          swipeOptions={{
            startSlide: 1,
            callback: index => {
              changeAufgabe(listAufgaben[this.getIndex(selectedIndex + index - 1)]);
            }
          }}
        >
          <div>
            <AufgabenCard frage={aufgaben[listAufgaben[this.getIndex(selectedIndex - 1)]]} select={this.props.select} unselect={this.props.unselect} check={this.props.check} />
          </div>
          <div>
            <AufgabenCard enableKeys frage={aufgaben[listAufgaben[selectedIndex]]} select={this.props.select} unselect={this.props.unselect} check={this.props.check} />
          </div>
          <div>
            <AufgabenCard frage={aufgaben[listAufgaben[this.getIndex(selectedIndex + 1)]]} select={this.props.select} unselect={this.props.unselect} check={this.props.check} />
          </div>
        </ReactSwipe>
        <Button size="small" onClick={this.handleBack} disabled={selectedIndex === 0}>
          <KeyboardArrowLeft />
          Zurück
        </Button>
        <Button size="small" onClick={this.handleNext} disabled={selectedIndex === listAufgaben.length - 1}>
          Weiter <KeyboardArrowRight />
        </Button>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AufgabenListe));
