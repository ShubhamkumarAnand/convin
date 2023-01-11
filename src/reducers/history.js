import { ADD_HISTORY, CLEAR_HISTORY } from '../actions/history';

const initialState = {
  history: []
};

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload]
      };
    case CLEAR_HISTORY:
      return {
        ...state,
        history: []
      };
    default:
      return state;
  }
}
