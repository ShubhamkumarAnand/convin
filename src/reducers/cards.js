import {
  ADD_CARD,
  DELETE_CARD,
  EDIT_CARD,
  MOVE_CARD
} from '../actions/cards';

const initialState = {
  cards: [],
  history: [],
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: action.payload.id,
            name: action.payload.name,
            link: action.payload.link,
            bucketId: action.payload.bucketId
          }
        ]
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload.id)
      };
    case EDIT_CARD:
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card.id === action.payload.id) {
            return {
              ...card,
              name: action.payload.name,
              link: action.payload.link,
              bucketId: action.payload.bucketId
            };
          } else {
            return card;
          }
        })
      };
    case MOVE_CARD:
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card.id === action.payload.id) {
            return {
              ...card,
              bucketId: action.payload.bucketId
            };
          } else {
            return card;
          }
        })
      };
    default:
      return state;
  }
}
