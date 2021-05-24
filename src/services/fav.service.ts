import { EMPTY_ARRAY, LS_FAVORITE_ARTISTS } from "../common/constants";
import artist from "../interfaces/artist";

export const addFavArtist = async (artist: artist) => {
  const favArtists = await getFavArtists();
  localStorage.setItem(LS_FAVORITE_ARTISTS, JSON.stringify([
    artist,
    ...favArtists
  ]));
}
export const removeFavArtist = async (artist: artist) => {
  const favArtists = await getFavArtists();
  const artists = favArtists.filter(fav => fav.mbid !== artist.mbid);
  localStorage.setItem(LS_FAVORITE_ARTISTS, JSON.stringify(artists));
}

export const getFavArtists = async (): Promise<Array<artist>> => {
  return JSON.parse(
    localStorage.getItem(LS_FAVORITE_ARTISTS)
    || JSON.stringify(EMPTY_ARRAY)
  );
}
