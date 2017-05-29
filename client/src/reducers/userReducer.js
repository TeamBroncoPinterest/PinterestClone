import { CREATE_USER } from '../actions/userActions'

const INITIAL_STATE = {
  data: {},
  loggedIn: false,
  error_message: ''
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_USER:
      console.log(action.type, action.payload)
      return { ...state, data: action.payload, loggedIn: true }
    default:
      return state;
  }
}
