import artist from "../../interfaces/artist";
import { addFavArtist, getFavArtists, removeFavArtist } from "../../services/fav.service";

export const addFavoriteArtist = (artist: artist) => {
  return async (dispatch: Function) => {
    await addFavArtist(artist);
    dispatch({ type: 'FAV_ADD_ARTIST', payload: artist });
  }
}

export const removeFavoriteArtist = (artist: artist) => {
  return async (dispatch: Function) => {
    await removeFavArtist(artist);
    dispatch({ type: 'FAV_REMOVE_ARTIST', payload: artist });
  }
}

export const getFavoriteArtists = () => {
  return async (dispatch: Function) => {
    const artists = await getFavArtists();
    dispatch({ type: 'FAV_SET_ARTIST_LIST', payload: artists });
  }
}
