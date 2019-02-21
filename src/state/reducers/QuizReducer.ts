import { UIAction, UI_OPEN_SIDEPANEL, UI_CLOSE_SIDEPANEL } from "../actions/UiActions";
import { UiState, QuizState, FragenListe, Frage } from "../types";
import mannschaft from "../data/mannschaft.json";
import { QuizAction, QUIZ_ADD_ANSWER, QUIZ_REMOVE_ANSWER, QUIZ_CHECK_ANSWER } from "../actions/QuizActions";
import { produce } from "immer";
const defaultState: QuizState = {
  //@ts-ignore
  fragen: mannschaft.reduce((map: FragenListe, frage: Frage) => {
    frage.geprueft = false;
    frage.korrekt = false;
    frage.antworten = [];
    map[frage.nr] = frage;
    return map;
  }, {})
};

export function quizReducer(state: QuizState = defaultState, action: QuizAction): QuizState {
  console.time("quizReducer");
  const result = produce(state, draft => {
    switch (action.type) {
      case QUIZ_ADD_ANSWER:
        draft.fragen[action.frage].antworten.push(action.antwort);
        break;
      case QUIZ_REMOVE_ANSWER:
        draft.fragen[action.frage].antworten = draft.fragen[action.frage].antworten.filter(a => a !== action.antwort);
        break;
      case QUIZ_CHECK_ANSWER:
        draft.fragen[action.frage] = checkAnswer(draft.fragen[action.frage]);
        break;
    }
  });

  console.timeEnd("quizReducer");
  return result;
}

function checkAnswer(frage: Frage) {
  let newFrage = { ...frage };

  const correctlySelected = frage.antworten.filter(a => frage.loesungen.indexOf(a) === -1).length === 0;
  const correctlyNotSelected = frage.loesungen.filter(a => frage.antworten.indexOf(a) === -1).length === 0;

  newFrage.korrekt = correctlyNotSelected && correctlySelected;
  newFrage.geprueft = true;

  return newFrage;
}
