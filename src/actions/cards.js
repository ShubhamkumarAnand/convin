export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const MOVE_CARD = 'MOVE_CARD';

export function addCard(id, name, link, bucketId) {
  return { type: ADD_CARD, payload: { id, name, link, bucketId } };
}

export function deleteCard(id) {
  return { type: DELETE_CARD, payload: { id } };
}

export function editCard(id, name, link, bucketId) {
  return { type: EDIT_CARD, payload: { id, name, link, bucketId } };
}

export function moveCard(id, bucketId) {
  return { type: MOVE_CARD, payload: { id, bucketId } };
}
