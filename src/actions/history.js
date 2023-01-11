export const ADD_HISTORY = 'ADD_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

export function addHistory(card) {
  return { type: ADD_HISTORY, payload: { ...card, timePlayed: Date.now() } };
}

export function clearHistory() {
  return { type: CLEAR_HISTORY };
}
