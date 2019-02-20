export interface StoreState {
	ui: UiState;
	aufgaben: AufgabenState;
	antworten: AntwortenState;
}

export interface UiState {
	sidepanelOpen: boolean;
}

export interface Aufgabe {
	nr: number;
	frage: string;
	auswahl: { [key: string]: string };
	loesung: Antwort;
}

export interface AufgabenState {
	[key: number]: Aufgabe;
}

export type Antwort = Array<string>;

export interface AntwortenState {
	[key: number]: Antwort;
}
