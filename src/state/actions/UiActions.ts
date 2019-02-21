export const UI_OPEN_SIDEPANEL = "UI_OPEN_SIDEPANEL";
export type UI_OPEN_SIDEPANEL = typeof UI_OPEN_SIDEPANEL;

export const UI_CLOSE_SIDEPANEL = "UI_CLOSE_SIDEPANEL";
export type UI_CLOSE_SIDEPANEL = typeof UI_CLOSE_SIDEPANEL;

export interface CloseSidePanel {
  type: UI_CLOSE_SIDEPANEL;
}
export function closeSidePanel(): CloseSidePanel {
  return {
    type: UI_CLOSE_SIDEPANEL
  };
}

export interface OpenSidePanel {
  type: UI_OPEN_SIDEPANEL;
}
export function openSidePanel(): OpenSidePanel {
  return {
    type: UI_OPEN_SIDEPANEL
  };
}

export type SidePanelAction = CloseSidePanel | OpenSidePanel;

export const UI_SELECT_AUFGABE = "UI_SELECT_AUFGABE";
export type UI_SELECT_AUFGABE = typeof UI_SELECT_AUFGABE;

export interface SelectAufgabe {
  type: UI_SELECT_AUFGABE;
  aufgabe: number;
}
export function selectAufgabe(aufgabe: number): SelectAufgabe {
  return {
    type: UI_SELECT_AUFGABE,
    aufgabe
  };
}

export type UIAufgabenAction = SelectAufgabe;

export type UIAction = SidePanelAction | UIAufgabenAction;
