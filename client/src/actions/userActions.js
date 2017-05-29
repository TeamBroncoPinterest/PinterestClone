import axios from 'axios';
export const CREATE_USER = 'CREATE_USER';


export function createUser(values) {
  const request = axios.post(`/api/create_user`, values)

  return {
    type: CREATE_USER,
    payload: request
  }
}
