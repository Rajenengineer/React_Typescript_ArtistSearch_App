import action from "../../interfaces/action";
import artist from "../../interfaces/artist";

const initialState: {
  artists: Array<artist>
} = {
  artists: [],
}

const favReducer = (state = initialState, { type, payload }: action) => {
  switch (type) {
    case 'FAV_SET_ARTIST_LIST':
      return {
        artists: payload
      };
    case 'FAV_ADD_ARTIST':
      return {
        artists: [
          payload,
          ...state.artists,
        ]
      };
    case 'FAV_REMOVE_ARTIST':
      return {
        artists: state.artists.filter(artist => artist.mbid !== payload.mbid)
      }
    default:
      return state;
  }
}

export default favReducer;
