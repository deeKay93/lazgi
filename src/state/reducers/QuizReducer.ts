import { UIAction, UI_OPEN_SIDEPANEL, UI_CLOSE_SIDEPANEL } from "../actions/UiActions";
import { UiState, QuizState } from "../types";
import mannschaft from "../data/mannschaft.json";


const defaultState : QuizState = {
  //@ts-ignore
  fragen: mannschaft
}

export function quizReducer(state: QuizState = defaultState, action: UIAction): QuizState {
  switch (action.type) {

  }
  return state;
}
