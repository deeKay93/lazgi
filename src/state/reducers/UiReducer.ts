import { UIAction, UI_OPEN_SIDEPANEL, UI_CLOSE_SIDEPANEL } from "../actions/UiActions";

export interface UiState {
  sidepanelOpen: boolean;
}

const defaultState = {
    sidepanelOpen: false
}

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
  }
  return state;
}
