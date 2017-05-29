import axios from 'axios';
export const CREATE_USER = 'CREATE_USER';
export const VALIDATE_LOGIN = 'VALIDATE_LOGIN';


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