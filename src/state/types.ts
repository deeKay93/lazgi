export interface StoreState {
  ui: UiState;
  quiz: QuizState;
}

export interface UiState {
  sidepanelOpen: boolean;
  selectedAufgabe: number;
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

export type FragenListe = { [key: string]: Frage };

export interface QuizState {
  fragen: FragenListe;
}
