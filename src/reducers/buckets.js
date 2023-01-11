import { ADD_BUCKET, DELETE_BUCKET, EDIT_BUCKET } from '../actions/buckets';

const initialState = {
  buckets: []
};

export default function bucketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BUCKET:
      return {
        ...state,
        buckets: [
          ...state.buckets,
          {
            id: action.payload.id,
            name: action.payload.name
          }
        ]
      };
    case DELETE_BUCKET:
      return {
        ...state,
        buckets: state.buckets.filter(bucket => bucket.id !== action.payload.id)
      };
    case EDIT_BUCKET:
      return {
        ...state,
        buckets: state.buckets.map(bucket => {
          if (bucket.id === action.payload.id) {
            return {
              ...bucket,
              name: action.payload.name
            };
          } else {
            return bucket;
          }
        })
      };
    default:
      return state;
  }
}
