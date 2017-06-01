import axios from 'axios';
export const GET_FEED = 'GET_FEED';
export const SELECT_PIN = 'SELECT_PIN';
export const SEARCH_FEED = 'SEARCH_FEED';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export function getFeed() {
  return (dispatch) => {
    axios.get('/api/feed')
      .then((result) => {
        return dispatch({
          type: GET_FEED,
          payload: result
        })
      })

    // window.PDK.me('pins', { fields: 'note, original_link, metadata, board, creator, image' }, (result) => {
    //   return dispatch({
    //     type: GET_FEED,
    //     payload: result
    //   })
    // });
  }

}


export function selectPin(data) {
  return {
    type: SELECT_PIN,
    payload: data
  }
}

export function searchFeed(term) {
  const request = axios.get(`/api/feed/${term}`)

  return {
    type: SEARCH_FEED,
    payload: request
  }
}

export function clearSearch() {
  return {
    type: CLEAR_SEARCH
  }
}
