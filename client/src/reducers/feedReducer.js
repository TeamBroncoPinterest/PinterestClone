import { GET_FEED, SELECT_PIN } from '../actions/feedActions'
const INITIAL_STATE = {
  feed: {},
  selectedPin: {}
}


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_FEED:
      return { ...state, feed: action.payload}

    case SELECT_PIN:
      return { ...state, selectedPin: action.payload }
    default:
      return state;
  }
}
