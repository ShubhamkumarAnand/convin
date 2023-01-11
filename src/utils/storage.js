const HISTORY_KEY = 'HISTORY';

export function getHistory() {
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY));
  return history || [];
}

export function setHistory(history) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
}
