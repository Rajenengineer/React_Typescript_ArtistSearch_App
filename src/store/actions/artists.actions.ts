import { fetchArtistInfo, fetchArtists } from "../../services/artists.service";

export const searchArtists = (query: string) => {
  return async (dispatch: Function) => {
    if (!query.trim()) {
      dispatch({
        type: 'SEARCH_SET_ARTISTS',
        payload: null
      });
    } else {
      const artists = await fetchArtists(query);
      dispatch({
        type: 'SEARCH_SET_ARTISTS',
        payload: artists
      });
    }
    dispatch({
      type: 'SEARCH_SET_QUERY',
      payload: query
    });
  }
}

export const getArtistInfo = (artistName: string) => {
  return async (dispatch: Function) => {
    const info = await fetchArtistInfo(artistName);
    dispatch({
      type: 'SEARCH_SET_ARTIST',
      payload: info
    });
  }
}