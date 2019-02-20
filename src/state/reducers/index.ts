import { uiReducer } from './UiReducer';
import { aufgabenReducer } from './AufgabenReducer';
import { antwortenReducer } from './AntwortenReducer';

export const reducers = {
	ui: uiReducer,
	aufgaben: aufgabenReducer,
	antworten: antwortenReducer
};
