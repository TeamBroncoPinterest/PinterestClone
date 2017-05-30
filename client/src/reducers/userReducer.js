import {CREATE_USER,
  VALIDATE_LOGIN,
  UPDATE_BOARDS,
  LOGIN_ERROR,
  CREATE_PIN,
  EDIT_PIN,
  DELETE_PIN
} from '../actions/userActions'

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
        data: action.payload.data,
        loggedIn: true
      }
    case VALIDATE_LOGIN:
      return {
        ...state,
        data: action.payload.data,
        loggedIn: true
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error_message: 'Invalid username/password'
      }
    case CREATE_PIN:
      return { ...state, data: action.payload }
      break;
    case EDIT_PIN:
      break;
    case DELETE_PIN:
      break;
    default:
      return state;
  }
}
