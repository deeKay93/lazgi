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
  auswahl: { [key: string]: string };
  loesungen: Array<string>;
  antworten: Array<string>;
  geprueft: boolean;
  korrekt: boolean;
}

export type FragenListe = Array<Frage>;

export interface QuizState {
  fragen: FragenListe;
}
