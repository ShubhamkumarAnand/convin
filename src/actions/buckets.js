export const ADD_BUCKET = 'ADD_BUCKET';
export const DELETE_BUCKET = 'DELETE_BUCKET';
export const EDIT_BUCKET = 'EDIT_BUCKET';

export function addBucket(id, name) {
  return { type: ADD_BUCKET, payload: { id, name } };
}

export function deleteBucket(id) {
  return { type: DELETE_BUCKET, payload: { id } };
}

export function editBucket(id, name) {
  return { type: EDIT_BUCKET, payload: { id, name } };
}
