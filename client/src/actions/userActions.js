import axios from 'axios';
export const CREATE_USER = 'CREATE_USER';
export const VALIDATE_LOGIN = 'VALIDATE_LOGIN';
export const UPDATE_BOARDS = 'UPDATE_BOARDS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SELECT_BOARD = 'SELECT_BOARD';
export const CREATE_PIN = 'CREATE_PIN';
export const EDIT_PIN = 'EDIT_PIN';
export const DELETE_PIN = 'DELETE_PIN';

export function createUser(values) {
  const request = axios.post(`/api/create_user`, values)

  return {
    type: CREATE_USER,
    payload: request
  }
}

export function validateLogin(values) {
  return (dispatch) => {
    axios.post('/api/login', values)
      .then((data) => {
        return dispatch ({
          type: VALIDATE_LOGIN,
          payload: data
        })
      })
      .catch(() => {
        return dispatch ({
          type: LOGIN_ERROR
        })
      });
  }
}

export function updateBoards(data) {
  return (dispatch) => {
    axios.put(`/api/update_board/${data.user_id}`, data)
      .then(() => {
        return dispatch ({
          type: UPDATE_BOARDS,
          payload: data
        });
      });
  }
}


export function createPin(user, pinData) {
  return (dispatch) => {
    axios.post('api/create_pin', { ...pinData, user_id: user.user_id })
      .then(() => {
        user.pins.push({ ...pinData, user_id: user.user_id })
        return dispatch({
          type: CREATE_PIN,
          payload: user
        })
      })
  }
}

export function editPin(board, note, user, pinId) {

  return (dispatch) => {
    axios.put('api/edit_pin', { board, note, id: pinId })
      .then((response) => {
        return dispatch({
          type: EDIT_PIN
        })
      })
  }
  return {
    type: EDIT_PIN
  }
}

export function deletePin(pinID) {

  return (dispatch) => {
    axios.delete('api/delete_pin', { id: pinID})
      .then((response) => {
        return dispatch({
          type: DELETE_PIN
        })
      })
  }
}

export function selectBoard(data){
  return {
    type: SELECT_BOARD,
    payload: data
  }

}
