export const QUIZ_ADD_ANSWER = "QUIZ_ADD_ANSWER";
export type QUIZ_ADD_ANSWER = typeof QUIZ_ADD_ANSWER;

export interface AddAnswer {
  type: QUIZ_ADD_ANSWER;
  frage: number;
  antwort: string;
}
export function addAnswer(frage: number, antwort: string): AddAnswer {
  return {
    type: QUIZ_ADD_ANSWER,
    frage,
    antwort
  };
}

export const QUIZ_REMOVE_ANSWER = "QUIZ_REMOVE_ANSWER";
export type QUIZ_REMOVE_ANSWER = typeof QUIZ_REMOVE_ANSWER;

export interface RemoveAnswer {
  type: QUIZ_REMOVE_ANSWER;
  frage: number;
  antwort: string;
}

export function removeAnswer(frage: number, antwort: string): RemoveAnswer {
  return {
    type: QUIZ_REMOVE_ANSWER,
    frage,
    antwort
  };
}
export const QUIZ_CHECK_ANSWER = "QUIZ_CHECK_ANSWER";
export type QUIZ_CHECK_ANSWER = typeof QUIZ_CHECK_ANSWER;

export interface CheckAnswer {
  type: QUIZ_CHECK_ANSWER;
  frage: number;
}
export function checkAnswer(frage: number): CheckAnswer {
  return {
    type: QUIZ_CHECK_ANSWER,
    frage
  };
}

export type AnswerAction = AddAnswer | RemoveAnswer | CheckAnswer;

export type QuizAction = AnswerAction;
