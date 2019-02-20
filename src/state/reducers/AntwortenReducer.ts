import produce from 'immer';
import { AnswerAction, ANSWER_ADD, ANSWER_REMOVE } from '../actions/AntwortenActions';
import { AntwortenState } from '../types';

const defaultState: AntwortenState = {};

export function antwortenReducer(state: AntwortenState = defaultState, action: AnswerAction): AntwortenState {
	console.time('bla');
	const res = produce(state, (draft) => {
		switch (action.type) {
			case ANSWER_ADD:
				if (draft[action.frage]) {
					draft[action.frage].push(action.antwort);
				} else {
					draft[action.frage] = [ action.antwort ];
				}
				break;
			case ANSWER_REMOVE:
				draft[action.frage] = draft[action.frage].filter((a) => a !== action.antwort);
				break;
		}
	});
	console.timeEnd('bla');

	return res;
}

// function checkAnswer(frage: Frage) {
// 	let newFrage = { ...frage };

// 	const correctlySelected = frage.antworten.filter((a) => frage.loesungen.indexOf(a) === -1).length === 0;
// 	const correctlyNotSelected = frage.loesungen.filter((a) => frage.antworten.indexOf(a) === -1).length === 0;

// 	newFrage.korrekt = correctlyNotSelected && correctlySelected;
// 	newFrage.geprueft = true;

// 	return newFrage;
// }
