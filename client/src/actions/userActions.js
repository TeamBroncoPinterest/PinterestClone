import axios from 'axios';
export const CREATE_USER = 'CREATE_USER';
export const VALIDATE_LOGIN = 'VALIDATE_LOGIN';
export const UPDATE_BOARDS = 'UPDATE_BOARDS';

export function createUser(values) {
  const request = axios.post(`/api/create_user`, values)

  return {
    type: CREATE_USER,
    payload: request
  }
}

export function validateLogin(values) {
  const request = axios.post('/api/login', values);

  return {
    type: VALIDATE_LOGIN,
    payload: request
  }
}

export function updateBoards(data) {
  console.log(data)
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

