import produce from 'immer';
import mannschaft from '../data/mannschaft.json';
import { AufgabenState } from '../types';
import { AnswerAction } from '../actions/AntwortenActions.js';

function jsonToState(json = mannschaft) {
	let aufgaben: AufgabenState = [];

	json.forEach((a) => {
		aufgaben[a.nr] = {
			nr: a.nr,
			frage: a.frage,
			//@ts-ignore
			auswahl: a.auswahl
		};
	});
	return aufgaben;
}

const defaultState: AufgabenState = jsonToState(mannschaft);

export function aufgabenReducer(state: AufgabenState = defaultState, action: AnswerAction): AufgabenState {
	return state;
}

// function checkAnswer(frage: Frage) {
// 	let newFrage = { ...frage };

// 	const correctlySelected = frage.antworten.filter((a) => frage.loesungen.indexOf(a) === -1).length === 0;
// 	const correctlyNotSelected = frage.loesungen.filter((a) => frage.antworten.indexOf(a) === -1).length === 0;

// 	newFrage.korrekt = correctlyNotSelected && correctlySelected;
// 	newFrage.geprueft = true;

// 	return newFrage;
// }
