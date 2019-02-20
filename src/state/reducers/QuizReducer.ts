import { UIAction, UI_OPEN_SIDEPANEL, UI_CLOSE_SIDEPANEL } from "../actions/UiActions";
import { UiState, QuizState, FragenListe, Frage } from "../types";
import mannschaft from "../data/mannschaft.json";
import { QuizAction, QUIZ_ADD_ANSWER, QUIZ_REMOVE_ANSWER, QUIZ_CHECK_ANSWER } from "../actions/QuizActions";

const defaultState: QuizState = {
  //@ts-ignore
  fragen: mannschaft.map((frage: Frage) => {
    frage.geprueft = false;
    frage.korrekt = false;
    frage.antworten = [];
    return frage;
  }, {})
};

export function quizReducer(state: QuizState = defaultState, action: QuizAction): QuizState {
  let result: QuizState;
  console.time("quizReducer");
  switch (action.type) {
    case QUIZ_ADD_ANSWER:
      {
        result = {
          ...state,
          fragen: state.fragen.map(f => {
            if (f.nr === action.frage) {
              let newF = { ...f };
              newF.antworten.push(action.antwort);
              return newF;
            } else {
              return f;
            }
          })
        };
      }
      break;
    case QUIZ_REMOVE_ANSWER:
      {
        result = {
          ...state,
          fragen: state.fragen.map(f => {
            if (f.nr === action.frage) {
              let newF = { ...f, antworten: f.antworten.filter(a => a !== action.antwort) };
              return newF;
            } else {
              return f;
            }
          })
        };
      }
      break;
    case QUIZ_CHECK_ANSWER:
      {
        result = {
          ...state,
          fragen: state.fragen.map(f => {
            if (f.nr === action.frage) {
              return checkAnswer(f);
            } else {
              return f;
            }
          })
        };
      }
      break;
    default:
      result = state;
  }

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
