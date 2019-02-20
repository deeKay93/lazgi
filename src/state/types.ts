export interface StoreState {
  ui: UiState;
  quiz: QuizState;
}

export interface UiState {
  sidepanelOpen: boolean;
}

export interface Frage {
  nr: number;
  frage: string;
  antworten: { [key: string]: string };
  loesungen: Array<string>;
}

export interface QuizState {
  fragen: Array<Frage>;
}
