import Album from "./album";
import artist from "./artist";
import Tag from "./tag";
import Track from "./track";

export default interface ArtistDetails {
  fullInfo: artist;
  topTags: Array<Tag>;
  topAlbums: Array<Album>;
  topTracks: Array<Track>;
}