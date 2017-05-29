import {CREATE_USER, VALIDATE_LOGIN} from '../actions/userActions'

const INITIAL_STATE = {
  data: {},
  loggedIn: false,
  error_message: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        data: action.payload,
        loggedIn: true
      }
    case VALIDATE_LOGIN:
      return {
        ...state,
        data: action.payload,
        loggedIn: true
      }
    default:
      return state;
  }
}
