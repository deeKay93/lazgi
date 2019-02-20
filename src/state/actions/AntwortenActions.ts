export const ANSWER_ADD = 'ANSWER_ADD';
export type ANSWER_ADD = typeof ANSWER_ADD;

export interface AddAnswer {
	type: ANSWER_ADD;
	frage: number;
	antwort: string;
}
export function addAnswer(frage: number, antwort: string): AddAnswer {
	return {
		type: ANSWER_ADD,
		frage,
		antwort
	};
}

export const ANSWER_REMOVE = 'ANSWER_REMOVE';
export type ANSWER_REMOVE = typeof ANSWER_REMOVE;

export interface RemoveAnswer {
	type: ANSWER_REMOVE;
	frage: number;
	antwort: string;
}

export function removeAnswer(frage: number, antwort: string): RemoveAnswer {
	return {
		type: ANSWER_REMOVE,
		frage,
		antwort
	};
}
export const ANSWER_CHECK = 'ANSWER_CHECK';
export type ANSWER_CHECK = typeof ANSWER_CHECK;

export interface CheckAnswer {
	type: ANSWER_CHECK;
	frage: number;
}
export function checkAnswer(frage: number): CheckAnswer {
	return {
		type: ANSWER_CHECK,
		frage
	};
}

export type AnswerAction = AddAnswer | RemoveAnswer | CheckAnswer;
