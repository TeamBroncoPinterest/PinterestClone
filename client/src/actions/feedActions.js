
export const GET_FEED = 'GET_FEED';

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
