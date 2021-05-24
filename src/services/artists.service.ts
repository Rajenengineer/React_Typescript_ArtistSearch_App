import axios from "./axios";
import Album from "../interfaces/album";
import artist from "../interfaces/artist";
import Tag from "../interfaces/tag";
import Track from "../interfaces/track";

export const fetchArtists = async (artist: string): Promise<Array<artist>> => {
  const resp = await axios.get('/?method=artist.search', { params: { artist } });
  return resp.data.results.artistmatches.artist;
};

export const fetchArtistInfo = async (artist: string) => {
  const [fullInfo, topTags, topAlbums, topTracks] = await Promise.all([
    fetchInfo(artist),
    fetchTopTags(artist),
    fetchTopAlbums(artist),
    fetchTopTracks(artist),
  ]);
  return { fullInfo, topTags, topAlbums, topTracks };
};

export const fetchInfo = async (artist: string): Promise<artist> => {
  const resp = await axios.get('/?method=artist.getInfo', { params: { artist } });
  return resp.data.artist;
};
export const fetchTopTags = async (artist: string): Promise<Array<Tag>> => {
  const resp = await axios.get('/?method=artist.getTopTags', { params: { artist } });
  return resp.data.toptags.tag;
};
export const fetchTopAlbums = async (artist: string): Promise<Array<Album>> => {
  const resp = await axios.get('/?method=artist.getTopAlbums', { params: { artist } });
  return resp.data.topalbums.album;
};
export const fetchTopTracks = async (artist: string): Promise<Array<Track>> => {
  const resp = await axios.get('/?method=artist.getTopTracks', { params: { artist } });
  return resp.data.toptracks.track;
};