import { GET_FEED } from '../actions/feedActions'

const INITIAL_STATE = {
  feed: {}
}


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_FEED:
      return { ...state, feed: action.payload}
    default:
      return state;
  }
}
