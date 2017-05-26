
export const GET_FEED = 'GET_FEED';

export const SELECT_PIN = 'SELECT_PIN';


export function getFeed() {
  return (dispatch) => {
    window.PDK.me('pins', { fields: 'id, link, note, url, original_link, metadata, attribution, board, creator, image' }, (result) => {
      return dispatch({
        type: GET_FEED,
        payload: result
      })
    });
  }

}


export function selectPin(data) {
  return {
    type: SELECT_PIN,
    payload: data
  }
}
