import { GET_FEED, SELECT_PIN, SEARCH_FEED, CLEAR_SEARCH } from '../actions/feedActions'
const INITIAL_STATE = {
  feed: {},
  permanentFeed: {},
  selectedPin: {}
}


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_FEED:
      return { ...state, feed: action.payload, permanentFeed: action.payload }
    case SEARCH_FEED:
     return { ...state, feed: action.payload }
    case CLEAR_SEARCH:
      return { ...state, feed: state.permanentFeed}
    case SELECT_PIN:
      return { ...state, selectedPin: action.payload }
    default:
      return state;
  }
}
