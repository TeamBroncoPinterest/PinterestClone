import axios from 'axios';
export const GET_FEED = 'GET_FEED';
export const SELECT_PIN = 'SELECT_PIN';


export function getFeed() {
  return (dispatch) => {
    axios.get('/api/feed')
      .then((result) => {
        console.log(result);
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
