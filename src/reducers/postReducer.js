import { FETCH_POSTS, NEW_POST, SEARCH_POST} from '../actions/types';

const initialState = {
  items: [],
  originalItems: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
        originalItems: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case SEARCH_POST:
      console.log(state);
      return {
        ...state,
        items: state.originalItems.filter((item) => item.title ? item.title.includes(action.payload) : false)
      };
    default:
      return state;
  }
}
