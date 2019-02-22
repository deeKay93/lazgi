import { UIAction, UI_OPEN_SIDEPANEL, UI_CLOSE_SIDEPANEL, UI_SELECT_AUFGABE } from "../actions/UiActions";
import { UiState } from "../types";

const defaultState: UiState = {
  sidepanelOpen: false,
  selectedAufgabe: 1
};

export function uiReducer(state: UiState = defaultState, action: UIAction): UiState {
  switch (action.type) {
    case UI_OPEN_SIDEPANEL:
      return {
        ...state,
        sidepanelOpen: true
      };
    case UI_CLOSE_SIDEPANEL:
      return {
        ...state,
        sidepanelOpen: false
      };
    case UI_SELECT_AUFGABE:
      return {
        ...state,
        selectedAufgabe: action.aufgabe
      };
  }
  return state;
}
